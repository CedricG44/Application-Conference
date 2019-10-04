import { Injectable } from "@angular/core";
import { BehaviorSubject, combineLatest, zip } from "rxjs";
import { SessionsService } from "./sessions.service";
import { Session } from "../../models/sessions";
import { map } from "rxjs/operators";
import { StorageService } from "./storage.service";
import { ActivatedRoute } from "@angular/router";

@Injectable()
export class SessionsStoreService {
  constructor(
    private sessionsService: SessionsService,
    private storageService: StorageService,
    private route: ActivatedRoute
  ) {}

  private readonly _sessions = new BehaviorSubject<{ [id: string]: Session }>(
    {}
  );

  readonly sessions$ = this._sessions.asObservable();
  readonly sessionsArray$ = this.sessions$.pipe(
    map((sessions: any) => {
      return Object.keys(sessions).map((id: any) => sessions[id]);
    })
  );

  get sessions(): any {
    return this._sessions.getValue();
  }

  set sessions(val: any) {
    this._sessions.next(val);
  }

  async fetchAll() {
    const sessions = await this.sessionsService.getSessions().toPromise();
    this.sessions = sessions;
    console.log("fetch", sessions);
    this.storageService.setSessions(sessions);
  }

  readonly selectedSession$ = combineLatest(
    this.sessions$,
    this.route.params,
    (sessions, params) => {
      const url = this.route.snapshot["_routerState"].url;
      const urlSplitted = url.split("/");
      const id = urlSplitted && urlSplitted[2];

      return sessions[id];
    }
  );

  init() {
    this.storageService.getSessions().then((sessions: any) => {
      if (
        Object.entries(sessions).length === 0 &&
        sessions.constructor === Object
      ) {
        this.fetchAll();
      } else {
        this._sessions.next(sessions);
      }
    });
  }
}

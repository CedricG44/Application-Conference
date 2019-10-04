import { Injectable } from "@angular/core";
import { BehaviorSubject, combineLatest } from "rxjs";
import { SessionsService } from "./sessions.service";
import { Session } from "../models/sessions";
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
  private readonly _corresp = new BehaviorSubject<any>({});

  readonly sessions$ = this._sessions.asObservable();
  readonly corresp$ = this._corresp.asObservable();

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

  get corresp(): any {
    return this._corresp.getValue();
  }

  set corresp(val: any) {
    this._corresp.next(val);
  }

  async fetchAll() {
    const sessions = await this.sessionsService.getSessions().toPromise();
    this.sessions = sessions;
    this.storageService.setSessions(sessions);

    // Build correspondance speaker -> session
    // {
    //   "nom du speaker": ["1", "2"];
    // }
    let corresp = {};
    const sessionsArray = Object.keys(sessions).map((id: any) => sessions[id]);

    for (const session of sessionsArray) {
      if (session.speakers) {
        for (const speaker of session.speakers) {
          if (!corresp[speaker]) {
            corresp[speaker] = [session.id];
          } else {
            corresp[speaker].push(session.id);
          }
        }
      }
    }

    this.corresp = corresp;
    this.storageService.setC(corresp);
  }

  readonly selectedSession$ = combineLatest(
    this.sessions$,
    this.route.params,
    (sessions, params) => {
      const url = this.route.snapshot["_routerState"].url;
      const urlSplitted = url.split("/");
      const id = urlSplitted && urlSplitted[urlSplitted.length - 1];
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
        this.storageService.getC().then((c: any) => {
          this._corresp.next(c);
        });
      }
    });
  }
}

import { Injectable } from "@angular/core";
import { BehaviorSubject, combineLatest } from "rxjs";
import { SessionsService } from "./sessions.service";
import {Dictionary, Session} from '../models/sessions';
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

  private readonly _sessions = new BehaviorSubject<Dictionary<Session>>(
    {}
  );
  private readonly _speakerSessionLinks = new BehaviorSubject<Dictionary<string[]>>({});

  readonly sessions$ = this._sessions.asObservable();
  readonly speakerSessionLinks$ = this._speakerSessionLinks.asObservable();

  readonly sessionsArray$ = this.sessions$.pipe(
    map((sessions: Dictionary<Session>) => {
      return Object.keys(sessions).map(id => sessions[id]);
    })
  );

  get sessions(): Dictionary<Session> {
    return this._sessions.getValue();
  }

  set sessions(val: Dictionary<Session>) {
    this._sessions.next(val);
  }

  get speakerSessionLinks(): Dictionary<string[]> {
    return this._speakerSessionLinks.getValue();
  }

  set speakerSessionLinks(val: Dictionary<string[]>) {
    this._speakerSessionLinks.next(val);
  }

  async fetchAll() {
    const sessions = await this.sessionsService.getSessions().toPromise();
    this.sessions = sessions;
    this.storageService.setSessions(sessions);

    // Build speakerSessionLinksondance speaker -> session
    // {
    //   "nom du speaker": ["1", "2"];
    // }
    let speakerSessionLinks = {};
    const sessionsArray = Object.keys(sessions).map(id => sessions[id]);

    for (const session of sessionsArray) {
      if (session.speakers) {
        for (const speaker of session.speakers) {
          if (!speakerSessionLinks[speaker]) {
            speakerSessionLinks[speaker] = [session.id];
          } else {
            speakerSessionLinks[speaker].push(session.id);
          }
        }
      }
    }

    this.speakerSessionLinks = speakerSessionLinks;
    this.storageService.setSpeakerSessionLinks(speakerSessionLinks);
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
    this.storageService.getSessions().then((sessions: Dictionary<Session>) => {
      if (
        Object.entries(sessions).length === 0 &&
        sessions.constructor === Object
      ) {
        this.fetchAll();
      } else {
        this._sessions.next(sessions);
        this.storageService.getSpeakerSessionLinks().then((speakerSessionLinks: Dictionary<string[]>) => {
          this._speakerSessionLinks.next(speakerSessionLinks);
        });
      }
    });
  }
}

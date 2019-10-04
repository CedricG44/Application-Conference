import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { SessionsService } from "./sessions.service";
import { Session } from "../models/sessions";
import { map } from "rxjs/operators";

@Injectable()
export class SessionsStoreService {
  constructor(private sessionsService: SessionsService) {
    this.fetchAll();
  }

  private readonly _sessions = new BehaviorSubject<Session[]>([]);

  readonly sessions$ = this._sessions.asObservable();

  sessionById(id: number): Observable<Session> {
    return this.sessions$.pipe(
      map(sessions => sessions.find(session => session.id === id))
    );
  }

  get sessions(): Session[] {
    return this._sessions.getValue();
  }

  set sessions(val: Session[]) {
    this._sessions.next(val);
  }

  async fetchAll() {
    this.sessions = await this.sessionsService.getSessions().toPromise();
  }
}

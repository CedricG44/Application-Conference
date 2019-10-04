import { Injectable } from "@angular/core";
import { Storage } from "@ionic/storage";
import {Dictionary, Session} from '../models/sessions';
import {Speaker} from '../speakers/speaker.model';

@Injectable()
export class StorageService {
  constructor(private storage: Storage) {}

  setSessions(sessions: Dictionary<Session>): void {
    this.storage.set("sessions", sessions);
  }

  setSpeakers(speakers: Dictionary<Speaker>): void {
    this.storage.set("speakers", speakers);
  }

  setNotes(speakers: any): void {
    this.storage.set("notes", speakers);
  }

  setC(c: any): void {
    this.storage.set("c", c);
  }

  getSessions(): Promise<Dictionary<Session>> {
    return this.storage.get("sessions").then((sessions: Dictionary<Session>) => {
      if (sessions) {
        return sessions;
      } else {
        return {};
      }
    });
  }

  getSpeakers(): Promise<Dictionary<Speaker>> {
    return this.storage.get("speakers").then((speakers: Dictionary<Speaker>) => {
      if (speakers) {
        return speakers;
      } else {
        return {};
      }
    });
  }

  getNotes(): Promise<any> {
    return this.storage.get("notes").then((notes: any) => {
      if (notes) {
        return notes;
      } else {
        return {};
      }
    });
  }

  getC(): Promise<any> {
    return this.storage.get("c").then((c: any) => {
      if (c) {
        return c;
      } else {
        return {};
      }
    });
  }
}

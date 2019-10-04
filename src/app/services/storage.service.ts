import { Injectable } from "@angular/core";
import { Storage } from "@ionic/storage";
import { Session } from "../models/sessions";

@Injectable()
export class StorageService {
  constructor(private storage: Storage) {}

  setSessions(sessions: Session[]): void {
    this.storage.set("sessions", sessions);
  }

  getSessions(): Promise<Session[]> {
    return this.storage.get("sessions").then((sessions: Session[]) => {
      if (sessions) {
        return sessions;
      } else {
        return [];
      }
    });
  }
}

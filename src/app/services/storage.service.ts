import { Injectable } from "@angular/core";
import { Storage } from "@ionic/storage";

@Injectable()
export class StorageService {
  constructor(private storage: Storage) {}

  setSessions(sessions: any): void {
    this.storage.set("sessions", sessions);
  }

  setSpeakers(speakers: any): void {
    this.storage.set("speakers", speakers);
  }

  setC(c: any): void {
    this.storage.set("c", c);
  }

  getSessions(): Promise<any> {
    return this.storage.get("sessions").then((sessions: any) => {
      if (sessions) {
        return sessions;
      } else {
        return {};
      }
    });
  }

  getSpeakers(): Promise<any> {
    return this.storage.get("speakers").then((speakers: any) => {
      if (speakers) {
        return speakers;
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

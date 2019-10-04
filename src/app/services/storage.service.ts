import { Injectable } from "@angular/core";
import { Storage } from "@ionic/storage";
import {Dictionary, Session} from '../models/sessions';
import {Speaker} from '../speakers/speaker.model';



@Injectable()
export class StorageService {
  SESSIONS: string = "sessions";
  SPEAKERS: string = "speakers";
  NOTES: string = "notes";
  SPEAKERSESSIONLINKS: string = "speakerSessionLinks";

  constructor(private storage: Storage) {}

  setSessions(sessions: Dictionary<Session>): void {
    this.storage.set(this.SESSIONS, sessions);
  }

  setSpeakers(speakers: Dictionary<Speaker>): void {
    this.storage.set(this.SPEAKERS, speakers);
  }

  setNotes(notes: any): void {
    this.storage.set(this.NOTES, notes);
  }

  setSpeakerSessionLinks(speakerSessionLinks: Dictionary<string[]>): void {
    this.storage.set(this.SPEAKERSESSIONLINKS, speakerSessionLinks);
  }

  getSessions(): Promise<Dictionary<Session>> {
    return this.storage.get(this.SESSIONS).then((sessions: Dictionary<Session>) => {
      if (sessions) {
        return sessions;
      } else {
        return {};
      }
    });
  }

  getSpeakers(): Promise<Dictionary<Speaker>> {
    return this.storage.get(this.SPEAKERS).then((speakers: Dictionary<Speaker>) => {
      if (speakers) {
        return speakers;
      } else {
        return {};
      }
    });
  }

  getNotes(): Promise<any> {
    return this.storage.get(this.NOTES).then((notes: any) => {
      if (notes) {
        return notes;
      } else {
        return {};
      }
    });
  }

  getSpeakerSessionLinks(): Promise<Dictionary<string[]>> {
    return this.storage.get(this.SPEAKERSESSIONLINKS).then((speakerSessionLinks: Dictionary<string[]>) => {
      if (speakerSessionLinks) {
        return speakerSessionLinks;
      } else {
        return {};
      }
    });
  }
}

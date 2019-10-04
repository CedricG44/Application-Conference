import { Injectable } from "@angular/core";
import { SessionsStoreService } from "./sessions-store.service";
import { SpeakersStoreService } from "./speakers-store.service";

@Injectable()
export class SharedService {
  constructor(
    private sessionsStoreService: SessionsStoreService,
    private speakersStoreService: SpeakersStoreService
  ) {
    this.sessionsStoreService.init();
    this.speakersStoreService.init();
  }
}

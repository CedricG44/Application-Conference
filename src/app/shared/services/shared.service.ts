import { Injectable } from "@angular/core";
import { SessionsStoreService } from "./sessions-store.service";
import { SpeakersStoreService } from "./speakers-store.service";
import { zip } from "rxjs";
import { map } from "rxjs/operators";

@Injectable()
export class SharedService {
  constructor(
    private sessionsStoreService: SessionsStoreService,
    private speakersStoreService: SpeakersStoreService
  ) {
    this.sessionsStoreService.init();
    this.speakersStoreService.init();
  }

  readonly sessionsArrayWithSpeakers$ = zip(
    this.sessionsStoreService.sessionsArray$,
    this.speakersStoreService.speakers$
  ).pipe(
    map(([sessionsArray, speakers]) => {
      return sessionsArray.map(s => {
        return {
          ...s,
          speakersInfos: s.speakers && s.speakers.map(n => speakers[n])
        };
      });
    })
  );
}

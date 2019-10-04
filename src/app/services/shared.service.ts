import { Injectable } from "@angular/core";
import { SessionsStoreService } from "./sessions-store.service";
import { SpeakersStoreService } from "./speakers-store.service";
import { zip, combineLatest } from "rxjs";
import { map, shareReplay, share } from "rxjs/operators";

@Injectable()
export class SharedService {
  constructor(
    private sessionsStoreService: SessionsStoreService,
    private speakersStoreService: SpeakersStoreService
  ) {
    this.sessionsStoreService.init();
    this.speakersStoreService.init();
  }

  // readonly selectedSessionWithSpeakers$ = zip(
  //   this.sessionsStoreService.selectedSession$,
  //   this.speakersStoreService.speakers$
  // ).pipe(
  //   map(([s, speakers]) => {
  //     return {
  //       ...s,
  //       speakersInfos: s.speakers && s.speakers.map(n => speakers[n])
  //     };
  //   }),
  //   shareReplay(1)
  // );

  readonly selectedSessionWithSpeakers$ = combineLatest(
    this.sessionsStoreService.selectedSession$,
    this.speakersStoreService.speakers$,
    (s, speakers) => {
      if (s && speakers) {
        return {
          ...s,
          speakersInfos: s.speakers && s.speakers.map(n => speakers[n])
        };
      } else {
        return {};
      }
    }
  );

  readonly selectedSpeakerWithSession$ = zip(
    this.speakersStoreService.selectedSpeaker$,
    this.sessionsStoreService.corresp$,
    this.sessionsStoreService.sessions$
  ).pipe(
    map(([speaker, corresp, sessions]) => {
      return {
        ...speaker,
        sessions: corresp[speaker.id].map(s => sessions[s])
      };
    })
  );
}

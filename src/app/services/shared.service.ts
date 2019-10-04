import {Injectable} from '@angular/core';
import {SessionsStoreService} from './sessions-store.service';
import {SpeakersStoreService} from './speakers-store.service';
import {zip, combineLatest} from 'rxjs';
import {map, shareReplay, share} from 'rxjs/operators';

@Injectable()
export class SharedService {
    constructor(
        private sessionsStoreService: SessionsStoreService,
        private speakersStoreService: SpeakersStoreService
    ) {
        this.sessionsStoreService.init();
        this.speakersStoreService.init();
    }

    readonly selectedSessionWithSpeakers$ = combineLatest(
        this.sessionsStoreService.selectedSession$,
        this.speakersStoreService.speakers$,
        (s, speakers) => {
            return {
                ...s,
                speakersInfos: s.speakers && s.speakers.map(n => speakers[n])
            };
        }
    );

    readonly selectedSpeakerWithSession$ = combineLatest(
        this.speakersStoreService.selectedSpeaker$,
        this.sessionsStoreService.corresp$,
        this.sessionsStoreService.sessions$,
        (speaker, corresp, sessions) => {
            return {
                ...speaker,
                sessions: corresp[speaker.id].map(s => sessions[s])
            };
        }
    );
}

import {Injectable} from '@angular/core';
import {SessionsStoreService} from './sessions-store.service';
import {SpeakersStoreService} from './speakers-store.service';
import {zip, combineLatest} from 'rxjs';
import {map, shareReplay, share} from 'rxjs/operators';
import {NotesStoreService} from './notes-store.service';

@Injectable()
export class SharedService {
    constructor(
        private sessionsStoreService: SessionsStoreService,
        private speakersStoreService: SpeakersStoreService,
        private notesStoreService: NotesStoreService
    ) {
        this.sessionsStoreService.init();
        this.speakersStoreService.init();
        this.notesStoreService.init();
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

    readonly selectedSessionAndNotes$ = combineLatest(
        this.sessionsStoreService.selectedSession$,
        this.notesStoreService.notes$,
        (s, notes) => {
            return {
                ...s,
                notes: notes && notes[s.id]
            };
        }
    );

    readonly selectedSpeakerWithSession$ = combineLatest(
        this.speakersStoreService.selectedSpeaker$,
        this.sessionsStoreService.speakerSessionLinks$,
        this.sessionsStoreService.sessions$,
        (speaker, corresp, sessions) => {
            return {
                ...speaker,
                sessions: corresp[speaker.id].map(s => sessions[s])
            };
        }
    );
}

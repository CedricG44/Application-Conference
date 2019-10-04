import { Injectable } from "@angular/core";
import {BehaviorSubject, combineLatest, Observable} from 'rxjs';
import { ActivatedRoute } from "@angular/router";
import { map } from "rxjs/operators";
import { StorageService } from "./storage.service";
import {Dictionary} from '../models/sessions';
import {Note} from '../models/note';
import {NotesService} from './notes.service';

@Injectable()
export class NotesStoreService {
  constructor(
    private notesService: NotesService,
    private storageService: StorageService,
    private route: ActivatedRoute
  ) {}

  private readonly _notes = new BehaviorSubject<Dictionary<Note[]>>(
    {}
  );

  readonly notes$ = this._notes.asObservable();

  // the getter will return the last value emitted in _todos subject
  get notes(): Dictionary<Note[]> {
    return this._notes.getValue();
  }

  set notes(val: Dictionary<Note[]>) {
    this._notes.next(val);
  }

  init() {
    this.storageService.getNotes().then((notes: Dictionary<Note[]>) => {
      this.notes = notes;
    });
  }

  async addPhoto(idSession: string) {
    try {
      const imageBase64 = await this.notesService.takePicture();

      const note: Note = {
        idSession,
        description: "Salut",
        imageBase64
      };

      const newNotes = {
        ...this.notes,
        [idSession]: [...this.notes[idSession] || [], note]
      };

      this.notes = newNotes;
      this.storageService.setNotes(newNotes);

    } catch(e){
      console.error(e);
    }

  }

  async removePhoto(id: string) {

  }
}

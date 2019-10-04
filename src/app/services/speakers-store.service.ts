import { Injectable } from "@angular/core";
import {BehaviorSubject, combineLatest, Observable} from 'rxjs';
import { SpeakersService } from "./speakers.service";
import { Speaker } from "../speakers/speaker.model";
import { ActivatedRoute } from "@angular/router";
import { map } from "rxjs/operators";
import { StorageService } from "./storage.service";
import {Dictionary} from '../models/sessions';

@Injectable()
export class SpeakersStoreService {
  constructor(
    private speakersService: SpeakersService,
    private storageService: StorageService,
    private route: ActivatedRoute
  ) {}

  // - We set the initial state in BehaviorSubject's constructor
  // - Nobody outside the Store should have access to the BehaviorSubject
  //   because it has the write rights
  // - Writing to state should be handled by specialized Store methods (ex: addTodo, removeTodo, etc)
  // - Create one BehaviorSubject per store entity, for example if you have TodoGroups
  //   create a new BehaviorSubject for it, as well as the observable$, and getters/setters
  private readonly _speakers = new BehaviorSubject<Dictionary<Speaker>>(
    {}
  );

  // Expose the observable$ part of the _todos subject (read only stream)
  readonly speakers$ = this._speakers.asObservable();
  readonly speakersArray$: Observable<Speaker[]> = this.speakers$.pipe(
    map((speakers: Dictionary<Speaker>) => {
      return Object.keys(speakers).map(id => speakers[id]);
    })
  );

  readonly selectedSpeaker$ = combineLatest(
    this.speakers$,
    this.route.params,
    (speakers, params) => {
      const url = this.route.snapshot["_routerState"].url;
      const urlSplitted = url.split("/");
      const id = urlSplitted && urlSplitted[2];

      return speakers[id];
    }
  );

  // the getter will return the last value emitted in _todos subject
  get speakers(): Dictionary<Speaker> {
    return this._speakers.getValue();
  }

  // assigning a value to this.todos will push it onto the observable
  // and down to all of its subsribers (ex: this.todos = [])
  set speakers(val: Dictionary<Speaker>) {
    this._speakers.next(val);
  }

  async fetchAll() {
    const speakers = await this.speakersService.getSpeakers().toPromise();
    this.speakers = speakers;
    this.storageService.setSpeakers(speakers);
  }

  init() {
    this.storageService.getSpeakers().then((speakers: Dictionary<Speaker>) => {
      if (
        Object.entries(speakers).length === 0 &&
        speakers.constructor === Object
      ) {
        this.fetchAll();
      } else {
        this._speakers.next(speakers);
      }
    });
  }
}

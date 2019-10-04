import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { SpeakersService } from "./speakers.service";
import { Speaker } from "./speaker.model";

@Injectable()
export class SpeakersStoreService {
  constructor(private speakersService: SpeakersService) {
    this.fetchAll();
  }

  // - We set the initial state in BehaviorSubject's constructor
  // - Nobody outside the Store should have access to the BehaviorSubject
  //   because it has the write rights
  // - Writing to state should be handled by specialized Store methods (ex: addTodo, removeTodo, etc)
  // - Create one BehaviorSubject per store entity, for example if you have TodoGroups
  //   create a new BehaviorSubject for it, as well as the observable$, and getters/setters
  private readonly _speakers = new BehaviorSubject<Speaker[]>([]);

  // Expose the observable$ part of the _todos subject (read only stream)
  readonly speakers$ = this._speakers.asObservable();

  // the getter will return the last value emitted in _todos subject
  get speakers(): Speaker[] {
    return this._speakers.getValue();
  }

  // assigning a value to this.todos will push it onto the observable
  // and down to all of its subsribers (ex: this.todos = [])
  set speakers(val: Speaker[]) {
    this._speakers.next(val);
  }

  async fetchAll() {
    this.speakers = await this.speakersService.getSpeakers().toPromise();
    console.log("speakers", this.speakers);
  }
}

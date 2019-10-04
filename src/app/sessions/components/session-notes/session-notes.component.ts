import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Session } from "../../../models/sessions";

@Component({
  selector: "app-session-notes",
  templateUrl: "./session-notes.component.html",
  styleUrls: ["./session-notes.component.scss"]
})
export class SessionNotesComponent implements OnInit {
  @Input() session: Session;
  @Output() takePicture = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  onTakePicture(id: string) {
    this.takePicture.emit(id);
  }
}

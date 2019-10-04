import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { Session } from "src/app/models/sessions";

@Component({
  selector: 'app-session-notes',
  templateUrl: './session-notes.component.html',
  styleUrls: ['./session-notes.component.scss'],
})
export class SessionNotesComponent implements OnInit {
  @Input() session: Session;

  constructor() { }

  ngOnInit() {}

  ngOnChanges(a: SimpleChanges){
    console.log(a);
  }

}

import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { SharedService } from "../../../services/shared.service";

@Component({
  selector: 'app-session-notes-page',
  templateUrl: './session-notes-page.component.html',
  styleUrls: ['./session-notes-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SessionNotesPageComponent implements OnInit {

  constructor(
    public sharedService: SharedService
  ) {}

  ngOnInit() {
    this.sharedService.selectedSessionWithSpeakers$.subscribe(a => {
      console.log(a);
    });
  }
  
}

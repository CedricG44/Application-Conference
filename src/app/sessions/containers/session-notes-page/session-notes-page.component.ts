import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { SharedService } from "../../../services/shared.service";
import {Location} from '@angular/common';

@Component({
  selector: "app-session-notes-page",
  templateUrl: "./session-notes-page.component.html",
  styleUrls: ["./session-notes-page.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SessionNotesPageComponent implements OnInit {
  constructor(public sharedService: SharedService, private location: Location) {}

  ngOnInit() {}

  goBack(): void {
    this.location.back();
  }
}

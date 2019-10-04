import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Session } from "src/app/models/sessions";
import { Router } from "@angular/router";

@Component({
  selector: "app-session-details",
  templateUrl: "./session-details.component.html",
  styleUrls: ["./session-details.component.scss"]
})
export class SessionDetailsComponent implements OnInit {
  @Input() session: Session;
  @Output() navigateToDetail = new EventEmitter<string>();

  constructor(private router: Router) {}

  ngOnInit() {}

  goToSpeakerDetail(id: string) {
    this.navigateToDetail.emit(id);
  }
}

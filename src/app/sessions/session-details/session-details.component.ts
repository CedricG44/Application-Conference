import { Component, OnInit, Input } from "@angular/core";
import { Session } from "src/app/models/sessions";

@Component({
  selector: "app-session-details",
  templateUrl: "./session-details.component.html",
  styleUrls: ["./session-details.component.scss"]
})
export class SessionDetailsComponent implements OnInit {
  @Input() session: Session;

  constructor() {}

  ngOnInit() {}
}

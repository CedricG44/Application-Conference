import { Component, Input, Output, EventEmitter } from "@angular/core";
import { Session } from "src/app/models/sessions";

@Component({
  selector: "app-sessions-list",
  templateUrl: "./sessions-list.component.html",
  styleUrls: ["./sessions-list.component.scss"]
})
export class SessionsListComponent {
  @Input() sessions: Session[];
  @Output() navigateToDetails = new EventEmitter<number>();

  sessionDetails(sessionId: number): void {
    this.navigateToDetails.emit(sessionId);
  }
}

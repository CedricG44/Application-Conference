import { Component, Input, Output, EventEmitter } from "@angular/core";
import { Session } from "src/app/models/sessions";

@Component({
  selector: "app-session-details",
  templateUrl: "./session-details.component.html",
  styleUrls: ["./session-details.component.scss"]
})
export class SessionDetailsComponent {
  @Input() session: Session;
  @Output() navigateToDetail = new EventEmitter<string>();
  @Output() navigateToNotes = new EventEmitter<string>();

  constructor() {}
  
  sessionNotes(id : string){
    this.navigateToNotes.emit(id);
  }

  goToSpeakerDetail(id: string) {
    this.navigateToDetail.emit(id);
  }
}

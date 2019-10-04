import { Component, Input, Output } from "@angular/core";
import { Speaker } from "../../speaker.model";
import { EventEmitter } from "@angular/core";

@Component({
  selector: "app-speakers-list",
  templateUrl: "./speakers-list.component.html",
  styleUrls: ["./speakers-list.component.scss"]
})
export class SpeakersListComponent {
  @Input() speakers: Speaker[];
  @Output() navigateToDetail = new EventEmitter();

  goToSpeakerDetail(id: string) {
    this.navigateToDetail.emit(id);
  }
}

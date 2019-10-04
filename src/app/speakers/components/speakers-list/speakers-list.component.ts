import { Component, OnInit, Input, Output, SimpleChanges } from "@angular/core";
import { Speaker } from "../../speaker.model";
import { EventEmitter } from "@angular/core";

@Component({
  selector: "app-speakers-list",
  templateUrl: "./speakers-list.component.html",
  styleUrls: ["./speakers-list.component.scss"]
})
export class SpeakersListComponent implements OnInit {
  @Input() speakers: Speaker[];
  @Output() navigateToDetail = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  goToSpeakerDetail(id: string) {
    this.navigateToDetail.emit(id);
  }
}

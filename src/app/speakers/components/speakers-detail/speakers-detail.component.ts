import { Component, OnInit, Input } from "@angular/core";
import { Speaker } from "../../speaker.model";

@Component({
  selector: "app-speakers-detail",
  templateUrl: "./speakers-detail.component.html",
  styleUrls: ["./speakers-detail.component.scss"]
})
export class SpeakersDetailComponent implements OnInit {
  @Input() speaker: Speaker;

  constructor() {}

  ngOnInit() {}
}

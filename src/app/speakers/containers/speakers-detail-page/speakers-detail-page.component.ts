import { Component } from "@angular/core";
import { SpeakersStoreService } from "../../../services/speakers-store.service";
import { Location } from "@angular/common";

@Component({
  selector: "app-speakers-detail-page",
  templateUrl: "./speakers-detail-page.component.html",
  styleUrls: ["./speakers-detail-page.component.scss"]
})
export class SpeakersDetailPageComponent {
  constructor(
    public speakersStore: SpeakersStoreService,
    private location: Location
  ) {}

  goBack() {
    this.location.back();
  }
}

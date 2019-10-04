import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { SharedService } from "src/app/services/shared.service";
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
    private location: Location,
    public sharedService: SharedService,
    private router: Router
  ) {}

  goBack() {
    this.location.back();
  }

  goToSessionDetail(id) {
    this.router.navigate(["sessions", id]);
  }
}

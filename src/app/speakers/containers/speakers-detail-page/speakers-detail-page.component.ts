import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { SharedService } from "src/app/services/shared.service";
import { SpeakersStoreService } from "../../../services/speakers-store.service";

@Component({
  selector: "app-speakers-detail-page",
  templateUrl: "./speakers-detail-page.component.html",
  styleUrls: ["./speakers-detail-page.component.scss"]
})
export class SpeakersDetailPageComponent {
  constructor(
    public speakersStore: SpeakersStoreService,
    public sharedService: SharedService,
    private router: Router
  ) {}

  goToSessionDetail(id) {
    this.router.navigate(["sessions", id]);
  }
}

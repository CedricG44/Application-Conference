import { Component, OnInit } from "@angular/core";
import { SpeakersStoreService } from "../../../shared/services/speakers-store.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-speakers-detail-page",
  templateUrl: "./speakers-detail-page.component.html",
  styleUrls: ["./speakers-detail-page.component.scss"]
})
export class SpeakersDetailPageComponent implements OnInit {
  constructor(
    public speakersStore: SpeakersStoreService,
    private router: Router
  ) {}

  ngOnInit() {}

  goBack() {
    this.router.navigate(["/speakers"]);
  }
}

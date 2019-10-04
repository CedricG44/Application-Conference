import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { SharedService } from "src/app/services/shared.service";

@Component({
  selector: "app-speakers-detail-page",
  templateUrl: "./speakers-detail-page.component.html",
  styleUrls: ["./speakers-detail-page.component.scss"]
})
export class SpeakersDetailPageComponent implements OnInit {
  constructor(public sharedService: SharedService, private router: Router) {}

  ngOnInit() {}

  goBack() {
    this.router.navigate(["/speakers"]);
  }

  goToSessionDetail(id) {
    this.router.navigate(["sessions", id]);
  }
}

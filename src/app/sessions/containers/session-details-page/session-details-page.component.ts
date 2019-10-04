import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { Router } from "@angular/router";
import { SessionsStoreService } from "../../../shared/services/sessions-store.service";

@Component({
  selector: "app-session-details-page",
  templateUrl: "./session-details-page.component.html",
  styleUrls: ["./session-details-page.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SessionDetailsPageComponent implements OnInit {
  constructor(
    public sessionsStore: SessionsStoreService,
    private router: Router
  ) {}

  ngOnInit() {}

  goBack(): void {
    this.router.navigate(["/sessions"]);
  }
}

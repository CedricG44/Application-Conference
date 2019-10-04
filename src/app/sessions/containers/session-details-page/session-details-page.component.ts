import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { Router } from "@angular/router";
import { SessionsStoreService } from "../../../services/sessions-store.service";
import { SharedService } from "../../../services/shared.service";

@Component({
  selector: "app-session-details-page",
  templateUrl: "./session-details-page.component.html",
  styleUrls: ["./session-details-page.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SessionDetailsPageComponent implements OnInit {
  constructor(
    public sessionsStore: SessionsStoreService,
    public sharedService: SharedService,
    private router: Router
  ) {}

  ngOnInit() {}

  goBack(): void {
    this.router.navigate(["/sessions"]);
  }

  onNavigateToDetail(id: string) {
    this.router.navigate(["speakers", id]);
  }
}

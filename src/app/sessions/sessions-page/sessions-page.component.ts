import { Component, ChangeDetectionStrategy } from "@angular/core";
import { SessionsStoreService } from "src/app/shared/services/sessions-store.service";
import { Router } from "@angular/router";
import { SharedService } from "src/app/shared/services/shared.service";

@Component({
  selector: "app-sessions-page",
  templateUrl: "./sessions-page.component.html",
  styleUrls: ["./sessions-page.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SessionsPageComponent {
  constructor(
    public sharedService: SharedService,
    public sessionsStore: SessionsStoreService,
    private router: Router
  ) {}

  onNavigationDetails(eventId: number): void {
    this.router.navigate(["sessions", eventId]);
  }
}

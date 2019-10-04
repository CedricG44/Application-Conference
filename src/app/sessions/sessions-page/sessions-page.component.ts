import { Component, ChangeDetectionStrategy } from "@angular/core";
import { SessionsStoreService } from "src/app/services/sessions-store.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-sessions-page",
  templateUrl: "./sessions-page.component.html",
  styleUrls: ["./sessions-page.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SessionsPageComponent {
  constructor(
    public sessionsStore: SessionsStoreService,
    private router: Router
  ) {}

  onNavigationDetails(eventId: number): void {
    this.router.navigate(["sessions", eventId]);
  }
}

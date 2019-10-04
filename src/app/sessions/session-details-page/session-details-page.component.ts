import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { SessionsStoreService } from "src/app/services/sessions-store.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-session-details-page",
  templateUrl: "./session-details-page.component.html",
  styleUrls: ["./session-details-page.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SessionDetailsPageComponent implements OnInit {
  sessionId: number;

  constructor(
    public sessionsStore: SessionsStoreService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.sessionId = +params.get("id");
    });
  }

  goBack(): void {
    this.router.navigate(["/sessions"]);
  }
}

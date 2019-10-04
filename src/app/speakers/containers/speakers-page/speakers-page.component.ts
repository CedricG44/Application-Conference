import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { SpeakersStoreService } from "../../../services/speakers-store.service";
import { Router } from "@angular/router";
import { SharedService } from "../../../services/shared.service";

@Component({
  selector: "app-speakers-page",
  templateUrl: "./speakers-page.component.html",
  styleUrls: ["./speakers-page.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SpeakersPageComponent implements OnInit {
  constructor(
    public sharedService: SharedService,
    public speakersStore: SpeakersStoreService,
    private router: Router
  ) {}

  ngOnInit() {}

  onNavigateToDetail(id: string) {
    this.router.navigate(["speakers", id]);
  }
}

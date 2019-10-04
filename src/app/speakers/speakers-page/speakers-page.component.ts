import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { SpeakersStoreService } from "../speakers-store.service";

@Component({
  selector: "app-speakers-page",
  templateUrl: "./speakers-page.component.html",
  styleUrls: ["./speakers-page.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SpeakersPageComponent implements OnInit {
  constructor(public speakersStore: SpeakersStoreService) {}

  ngOnInit() {}

  onNavigateToDetail(id: string) {
    console.log("ID", id);
  }
}

import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { SpeakersRoutingModule } from "./speakers-routing.module";
import { SpeakersPageComponent } from "./speakers-page/speakers-page.component";
import { IonicModule } from "@ionic/angular";
import { SpeakersListComponent } from "./components/speakers-list/speakers-list.component";
import { HttpClientModule } from "@angular/common/http";
import { SpeakersStoreService } from "./speakers-store.service";
import { SpeakersService } from "./speakers.service";
import { SpeakersDetailPageComponent } from "./speakers-detail-page/speakers-detail-page.component";

@NgModule({
  declarations: [
    SpeakersPageComponent,
    SpeakersListComponent,
    SpeakersDetailPageComponent
  ],
  imports: [CommonModule, SpeakersRoutingModule, IonicModule, HttpClientModule],
  providers: [SpeakersStoreService, SpeakersService]
})
export class SpeakersModule {}

import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { SpeakersRoutingModule } from "./speakers-routing.module";
import { SpeakersPageComponent } from "./containers/speakers-page/speakers-page.component";
import { IonicModule } from "@ionic/angular";
import { SpeakersListComponent } from "./components/speakers-list/speakers-list.component";
import { HttpClientModule } from "@angular/common/http";
import { SpeakersStoreService } from "../shared/services/speakers-store.service";
import { SpeakersService } from "../shared/services/speakers.service";
import { SpeakersDetailPageComponent } from "./containers/speakers-detail-page/speakers-detail-page.component";
import { SpeakersDetailComponent } from "./components/speakers-detail/speakers-detail.component";
import { SharedService } from "../shared/services/shared.service";
import { SharedModule } from "../shared/shared.module";

@NgModule({
  declarations: [
    SpeakersPageComponent,
    SpeakersListComponent,
    SpeakersDetailPageComponent,
    SpeakersDetailComponent
  ],
  imports: [
    CommonModule,
    SpeakersRoutingModule,
    IonicModule,
    HttpClientModule,
    SharedModule
  ],
  providers: [SpeakersStoreService, SpeakersService, SharedService]
})
export class SpeakersModule {}

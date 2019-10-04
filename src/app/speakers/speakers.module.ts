import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { SpeakersRoutingModule } from "./speakers-routing.module";
import { SpeakersPageComponent } from "./containers/speakers-page/speakers-page.component";
import { IonicModule } from "@ionic/angular";
import { SpeakersListComponent } from "./components/speakers-list/speakers-list.component";
import { SpeakersDetailPageComponent } from "./containers/speakers-detail-page/speakers-detail-page.component";
import { SpeakersDetailComponent } from "./components/speakers-detail/speakers-detail.component";
import { Contacts } from "@ionic-native/contacts/ngx";

@NgModule({
  declarations: [
    SpeakersPageComponent,
    SpeakersListComponent,
    SpeakersDetailPageComponent,
    SpeakersDetailComponent
  ],
  imports: [CommonModule, SpeakersRoutingModule, IonicModule],
  providers: [Contacts]
})
export class SpeakersModule {}

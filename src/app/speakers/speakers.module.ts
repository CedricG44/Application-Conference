import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { SpeakersRoutingModule } from "./speakers-routing.module";
import { SpeakersPageComponent } from "./speakers-page/speakers-page.component";

@NgModule({
  declarations: [SpeakersPageComponent],
  imports: [CommonModule, SpeakersRoutingModule]
})
export class SpeakersModule {}

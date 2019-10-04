import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { SpeakersPageComponent } from "./containers/speakers-page/speakers-page.component";
import { SpeakersDetailPageComponent } from "./containers/speakers-detail-page/speakers-detail-page.component";

const routes: Routes = [
  {
    path: "",
    component: SpeakersPageComponent
  },
  {
    path: ":id",
    component: SpeakersDetailPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SpeakersRoutingModule {}

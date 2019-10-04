import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { SessionsPageComponent } from "./containers/sessions-page/sessions-page.component";
import { SessionDetailsPageComponent } from "./containers/session-details-page/session-details-page.component";

const routes: Routes = [
  {
    path: "",
    component: SessionsPageComponent
  },
  {
    path: ":id",
    component: SessionDetailsPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SessionsRoutingModule {}

import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { SessionsPageComponent } from "./containers/sessions-page/sessions-page.component";
import { SessionDetailsPageComponent } from "./containers/session-details-page/session-details-page.component";
import { SessionNotesPageComponent } from './containers/session-notes-page/session-notes-page.component';

const routes: Routes = [
  {
    path: "",
    component: SessionsPageComponent
  },
  {
    path: ":id",
    component: SessionDetailsPageComponent
  },
  {
    path: "notes/:id",
    component: SessionNotesPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SessionsRoutingModule {}

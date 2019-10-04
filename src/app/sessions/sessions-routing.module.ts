import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { SessionsPageComponent } from "./sessions-page/sessions-page.component";

const routes: Routes = [
  {
    path: "",
    component: SessionsPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SessionsRoutingModule {}

import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DevicePageComponent } from "./device-page/device-page.component";

const routes: Routes = [
  {
    path: "",
    component: DevicePageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DeviceRoutingModule {}

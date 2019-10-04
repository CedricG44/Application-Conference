import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { DeviceRoutingModule } from "./device-routing.module";
import { DevicePageComponent } from "./device-page/device-page.component";
import { IonicModule } from "@ionic/angular";

@NgModule({
  declarations: [DevicePageComponent],
  imports: [CommonModule, DeviceRoutingModule, IonicModule]
})
export class DeviceModule {}

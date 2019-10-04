import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { SessionsRoutingModule } from "./sessions-routing.module";
import { SessionsPageComponent } from "./sessions-page/sessions-page.component";

@NgModule({
  declarations: [SessionsPageComponent],
  imports: [CommonModule, SessionsRoutingModule]
})
export class SessionsModule {}

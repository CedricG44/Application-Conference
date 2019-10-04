import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { SessionsRoutingModule } from "./sessions-routing.module";
import { SessionsPageComponent } from "./sessions-page/sessions-page.component";
import { IonicModule } from "@ionic/angular";
import { SessionsListComponent } from "./sessions-list/sessions-list.component";
import { HttpClientModule } from "@angular/common/http";
import { SessionsService } from "../services/sessions.service";
import { SessionsStoreService } from "../services/sessions-store.service";
import { SessionDetailsComponent } from "./session-details/session-details.component";
import { SessionDetailsPageComponent } from "./session-details-page/session-details-page.component";
import { StorageService } from "../services/storage.service";

@NgModule({
  declarations: [
    SessionsPageComponent,
    SessionsListComponent,
    SessionDetailsPageComponent,
    SessionDetailsComponent
  ],
  imports: [CommonModule, SessionsRoutingModule, IonicModule, HttpClientModule],
  providers: [SessionsService, SessionsStoreService, StorageService]
})
export class SessionsModule {}

import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { SessionsRoutingModule } from "./sessions-routing.module";
import { SessionsPageComponent } from "./containers/sessions-page/sessions-page.component";
import { IonicModule } from "@ionic/angular";
import { SessionsListComponent } from "./components/sessions-list/sessions-list.component";
import { SessionDetailsComponent } from "./components/session-details/session-details.component";
import { SessionDetailsPageComponent } from "./containers/session-details-page/session-details-page.component";

import { SessionNotesComponent } from './components/session-notes/session-notes.component';
import { SessionNotesPageComponent } from './containers/session-notes-page/session-notes-page.component';

@NgModule({
  declarations: [
    SessionsPageComponent,
    SessionsListComponent,
    SessionDetailsPageComponent,
    SessionDetailsComponent,
    SessionNotesComponent,
    SessionNotesPageComponent
  ],
  imports: [CommonModule, SessionsRoutingModule, IonicModule]
})
export class SessionsModule {}

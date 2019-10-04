import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SessionsService } from "./services/sessions.service";
import { SessionsStoreService } from "./services/sessions-store.service";
import { StorageService } from "./services/storage.service";
import { SharedService } from "./services/shared.service";
import { SpeakersService } from "./services/speakers.service";
import { SpeakersStoreService } from "./services/speakers-store.service";

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [
    SessionsService,
    SessionsStoreService,
    SpeakersService,
    SpeakersStoreService,
    StorageService,
    SharedService
  ]
})
export class SharedModule {}

import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { SharedService } from "../../../services/shared.service";
import {NotesService} from '../../../services/notes.service';
import {NotesStoreService} from '../../../services/notes-store.service';

@Component({
  selector: "app-session-notes-page",
  templateUrl: "./session-notes-page.component.html",
  styleUrls: ["./session-notes-page.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SessionNotesPageComponent implements OnInit {
  constructor(public sharedService: SharedService, public notesStoreService: NotesStoreService) {}

  ngOnInit() {}

  takePicture(id: string) {
    this.notesStoreService.addPhoto(id);
  }
}

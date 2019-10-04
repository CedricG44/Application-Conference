import { Component, Input, EventEmitter, Output } from "@angular/core";
import { Speaker } from "../../speaker.model";
import { Contacts, Contact } from "@ionic-native/contacts/ngx";
import { Platform } from "@ionic/angular";

@Component({
  selector: "app-speakers-detail",
  templateUrl: "./speakers-detail.component.html",
  styleUrls: ["./speakers-detail.component.scss"]
})
export class SpeakersDetailComponent {
  @Input() speaker: Speaker;
  @Output() onGoToSessionDetail = new EventEmitter();

  constructor(private contacts: Contacts, public platform: Platform) {}

  goToSessionDetail(id) {
    console.log("ID", id);
    this.onGoToSessionDetail.emit(id);
  }
  addToContacts(event: CustomEvent, speaker: Speaker) {
    if (event.detail.checked && this.platform.is("cordova")) {
      const contact: Contact = this.contacts.create();
      contact.name = { formatted: speaker.name };
      contact.organizations = [{ name: speaker.company }];
      contact.addresses = [{ country: speaker.country }];
      contact
        .save()
        .then(
          () => console.log("Contact saved!", contact),
          (error: any) => console.error("Error saving contact.", error)
        );
    }
  }
}

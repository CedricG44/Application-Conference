import { Component, Input } from "@angular/core";
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

  constructor(private contacts: Contacts, public platform: Platform) {}

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

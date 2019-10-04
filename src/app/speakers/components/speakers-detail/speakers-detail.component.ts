import { Component, OnInit, Input } from "@angular/core";
import { Speaker } from "../../speaker.model";
import {
  Contacts,
  Contact,
  ContactField,
  ContactName
} from "@ionic-native/contacts/ngx";

@Component({
  selector: "app-speakers-detail",
  templateUrl: "./speakers-detail.component.html",
  styleUrls: ["./speakers-detail.component.scss"]
})
export class SpeakersDetailComponent implements OnInit {
  @Input() speaker: Speaker;

  constructor(private contacts: Contacts) {}

  ngOnInit() {}

  addToContacts(event, speaker: Speaker) {
    console.log(event);
    let contact: Contact = this.contacts.create();

    contact.name = new ContactName(null, "Smith", "John");
    contact.phoneNumbers = [new ContactField("mobile", "6471234567")];
    contact
      .save()
      .then(
        () => console.log("Contact saved!", contact),
        (error: any) => console.error("Error saving contact.", error)
      );
  }
}

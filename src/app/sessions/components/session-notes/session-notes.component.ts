import { Component, OnInit, Input } from "@angular/core";
import { Session } from "../../../models/sessions";
import { Camera, CameraOptions } from "@ionic-native/camera/ngx";

@Component({
  selector: "app-session-notes",
  templateUrl: "./session-notes.component.html",
  styleUrls: ["./session-notes.component.scss"]
})
export class SessionNotesComponent implements OnInit {
  @Input() session: Session;

  constructor(private camera: Camera) {}

  ngOnInit() {}

  onTakePicture() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    };

    this.camera.getPicture(options).then(
      imageData => {
        // imageData is either a base64 encoded string or a file URI
        // If it's base64 (DATA_URL):
        let base64Image = "data:image/jpeg;base64," + imageData;
        console.log("img", base64Image);
      },
      err => {
        // Handle error
      }
    );
  }
}

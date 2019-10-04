import {Injectable} from '@angular/core';
import {Camera, CameraOptions} from '@ionic-native/camera/ngx';


@Injectable()
export class NotesService {
  constructor(private camera: Camera) {}

  async takePicture(): Promise<string> {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    };

    try {
        const imageData = await this.camera.getPicture(options);
        return `data:image/jpeg;base64,${imageData}`;
    } catch (e) {
        console.error(e);
    }
  }

}


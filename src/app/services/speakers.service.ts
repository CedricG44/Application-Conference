import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { Observable } from "rxjs";
import { Speaker } from "../speakers/speaker.model";

@Injectable()
export class SpeakersService {
  constructor(private http: HttpClient) {}

  getSpeakers(): Observable<Speaker[]> {
    return this.http.get<any>(`${environment.apiBaseUrl}/speakers`);
  }
}

// Object.keys(speakersDic).map((id: string) => {
//   const speaker: Speaker = speakersDic[id];
//   const newId: string = speaker.id.toString();
//   return {
//     id: newId,
//     ...speaker
//   };
// })

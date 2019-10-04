import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { tap, map } from "rxjs/operators";
import { Observable } from "rxjs";
import { Speaker } from "./speaker.model";

@Injectable()
export class SpeakersService {
  constructor(private http: HttpClient) {}

  getSpeakers(): Observable<Speaker[]> {
    return this.http.get<any>(`${environment.apiBaseUrl}/speakers`).pipe(
      map(speakersDic =>
        Object.keys(speakersDic).map((id: string) => {
          const speaker: Speaker = speakersDic[id];
          const newId: string = speaker.id.toString();
          return {
            id: newId,
            ...speaker
          };
        })
      )
    );
  }
}

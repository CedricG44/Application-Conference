import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { Observable } from "rxjs";
import { Session } from "../models/sessions";
import { map } from "rxjs/operators";

@Injectable()
export class SessionsService {
  constructor(private http: HttpClient) {}

  getSessions(): Observable<Session[]> {
    return this.http.get<any>(`${environment.apiBaseUrl}/sessions`).pipe(
      map((sessions: any) => {
        return Object.keys(sessions).map((id: any) => sessions[id]);
      })
    );
  }
}

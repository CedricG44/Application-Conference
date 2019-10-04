import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { Observable } from "rxjs";
import {Dictionary, Session} from '../models/sessions';

@Injectable()
export class SessionsService {
  constructor(private http: HttpClient) {}

  getSessions(): Observable<Dictionary<Session>> {
    return this.http.get<Dictionary<Session>>(`${environment.apiBaseUrl}/sessions`);
  }
}

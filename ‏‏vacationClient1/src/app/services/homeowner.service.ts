import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Homeowner } from '../classes/homeowner';
@Injectable({
  providedIn: 'root'
})
export class HomeownerService {
  constructor(public http: HttpClient) { }
  url = "https://localhost:44339/api/Homeowner/";
  currentHomeowner: Homeowner;
  registredHomeowner: Homeowner;
  InsertHomeowner(homeowner: Homeowner): Observable<Homeowner> {
    return this.http.post<Homeowner>(this.url + "InsertHomeowner", homeowner);
  }
  CheckHomeownerLogin(loginDetails) {
    return this.http.post<Homeowner>(this.url + "GetHomeownerByLogin", loginDetails);
  }
  CheckThatTheEmailIsAvailable(email: string): Observable<boolean> {
    return this.http.post<boolean>(this.url + "CheckThatTheEmailIsAvailable", { "email": email });
  }
  GetHomeownersByHomeownersId(homeownersId: Array<number>): Observable<Array<Homeowner>> {
    return this.http.post<Array<Homeowner>>(this.url + "GetHomeownersByHomeownersId", homeownersId);
  }
}
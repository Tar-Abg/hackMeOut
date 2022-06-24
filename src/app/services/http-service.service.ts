import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from "rxjs";
import RegisterData from "../models/common-interfaces";
import LoginForm from "../models/common-interfaces";

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {
  apiUrl = "localhost:8087/api/";

  constructor(private http: HttpClient) { }

  register(data: RegisterData): Observable<any>{
    // return this.http.post<Observable<any>>(this.apiUrl + 'Account/register', data);
    // @ts-ignore
    return new Observable<any>;
  }

  login(): Observable<any> {
    // return this.http.post<Observable<any>>(this.apiUrl + 'Account/authenticate', data);
    return this.http.get<Observable<any>>("assets/back.json");
  }

  getBanksOffers(): Observable<any>{
    return this.http.get<Observable<any>>(this.apiUrl);
  }

  approveCredit(data: FormData): Observable<any>{
    return this.http.post<Observable<any>>(this.apiUrl, data);
  }
}

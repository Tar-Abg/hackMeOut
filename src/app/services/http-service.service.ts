import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from "rxjs";
import RegisterData from "../models/common-interfaces";
import LoginForm from "../models/common-interfaces";

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {
  apiUrl = "Url";

  constructor(private http: HttpClient) { }

  register(data: RegisterData): Observable<Observable<any>>{
    return this.http.post<Observable<any>>(this.apiUrl, data);
  }

  login(data: LoginForm): Observable<any> {
    return this.http.post<Observable<any>>(this.apiUrl, data);
  }

  getBanksOffers(): Observable<any>{
    return this.http.get<Observable<any>>(this.apiUrl);
  }

  approveCredit(data: FormData): Observable<any>{
    return this.http.post<Observable<any>>(this.apiUrl, data);
  }
}

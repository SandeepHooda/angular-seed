import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {LoginVO}  from './LoginVO';
import { Observable } from 'rxjs';

@Injectable()
export class LoginService {
  constructor(private http: HttpClient) { }

  validateLogin(regID: String) :  Observable<LoginVO> {
    return this.http.get<LoginVO>('http://localhost:8080/safemate-heroku/ws/safemate/login/key?regID='+regID);
  }
}
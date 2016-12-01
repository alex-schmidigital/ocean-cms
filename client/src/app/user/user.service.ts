import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { API_BASE_URL } from '../services/constants';
import { RequestBase } from '../services/request-base';

@Injectable()
export class UserService extends RequestBase {
  session: JSON;

  constructor(public http: Http) {
    super(http);

    if(!this.sessionIsJson())
      localStorage.setItem('sessionInfo', '{}')
  }

  login(email: string, password: string): Observable<JSON> {
    let body = {
      email,
      password,
    };

    return this.http.post(`${API_BASE_URL}/Users/login`, JSON.stringify(body), this.options)
      .map(res => res.json());
  }

  sessionIsJson() {
    let returnState =  false;
    try {
      this.session = JSON.parse(localStorage.getItem('sessionInfo'));
      returnState = true;
    } catch (e) {
      returnState = false;
    } finally {
      return returnState;
    }
  }

  logout(): Observable<string> {
    let accessToken = localStorage.getItem('sessionInfo')['id'];
    return this.http
      .post(`${API_BASE_URL}/Users/logout?access_token=${accessToken}`,
        JSON.stringify({}),
        this.options)
      .map(res => res.json());
  }

  storeSession(session: JSON) {
    localStorage.setItem('sessionInfo', JSON.stringify(session));
  }

  destroySession() {
    localStorage.setItem('sessionInfo', '{}');
  }
}

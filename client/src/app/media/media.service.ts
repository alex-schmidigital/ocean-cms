import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { Store } from '@ngrx/store';
import { AppState } from '../reducers';

import { API_BASE_URL } from '../services/constants';
import { RequestBase } from '../services/request-base';

import { Media } from './media.model';

@Injectable()
export class MediaService extends RequestBase {

  accessToken: string;

  constructor(
    public http: Http,
    private store: Store<AppState>
  ) {
    super(http);
    this.accessToken = JSON.parse(localStorage.getItem('sessionInfo'))['id'];
  }

  loadMedia(): Observable<any> {
    return this.http.get(`${API_BASE_URL}/files?access_token=${this.accessToken}`)
      .map(res => res.json())
  }

  deleteMedia(id): Observable<JSON> {
    console.log(id);
    return this.http
      .delete(`${API_BASE_URL}/files/${id}?access_token=${this.accessToken}`, this.options)
      .map(res => res.json());
  }
}

import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { Store } from '@ngrx/store';
import { AppState } from '../reducers';

import { API_BASE_URL } from '../services/constants';
import { RequestBase } from '../services/request-base';

import { Page } from './page.model';

@Injectable()
export class PageService extends RequestBase {

  session: JSON;

  accessToken: string;

  userId: number;

  constructor(
    public http: Http,
    private store: Store<AppState>
  ) {
    super(http);
    this.accessToken = JSON.parse(localStorage.getItem('sessionInfo'))['id'];
    this.userId = JSON.parse(localStorage.getItem('sessionInfo'))['userId'];

  }

  createPost(page): Observable<JSON> {
    let body: Page = {
      'title': page.title,
      'content': page.content,
      'image': page.image,
      'owner': this.userId
    };

    return this.http
      .post(`${API_BASE_URL}/Pages?access_token=${this.accessToken}`,
        JSON.stringify(body),
        this.options)
      .map(res => res.json());
  }

  deletePost(id): Observable<JSON> {
    return this.http
      .delete(`${API_BASE_URL}/Pages/${id}?access_token=${this.accessToken}`, this.options)
      .map(res => res.json());
  }

  patchPost(id, body: Page): Observable<JSON> {
    return this.http
      .patch(`${API_BASE_URL}/Pages/${id}?access_token=${this.accessToken}`, body, this.options)
      .map(res => res.json());
  }

  loadAll(): Observable<any> {
    return this.http.get(`${API_BASE_URL}/Pages?access_token=${this.accessToken}`, this.options)
      .map(res => res.json())
  }
}

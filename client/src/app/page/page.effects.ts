/* tslint:disable: member-ordering */
import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { PageActions } from './page.actions';
import { AppState } from '../reducers';
import { PageService } from './page.service';

@Injectable()

export class PageEffects {
  constructor(
    private actions$: Actions,
    private store: Store<AppState>,
    private pageService: PageService,
    private pageActions: PageActions,
    private router: Router
  ) { }

  @Effect() createPost$ = this.actions$
    .ofType(PageActions.CREATE_POST)
    .map(action => action.payload)
    .switchMap(page => this.pageService.createPost(page)
      .mergeMap((res: any) => {
        this.router.navigate(['/lazy']);
        return Observable.of(
        this.pageActions.createPostSuccess(res)
        )}
      )
      .catch((err) => Observable.of(
        this.pageActions.createPostFail(err)
      ))
    );

  @Effect() deletePost$ = this.actions$
    .ofType(PageActions.DELETE_POST)
    .map(action => action.payload)
    .switchMap(page => this.pageService.deletePost(page.id)
      .mergeMap((res: any) => Observable.of(
        this.pageActions.deletePostSuccess(res)
        )
      )
      .catch((err) => Observable.of(
        this.pageActions.deletePostFail(err)
      ))
    );

  @Effect() deletePostSuccess$ = this.actions$
    .ofType(PageActions.DELETE_POST_SUCCESS)
    .mergeMap(() => Observable.of(
      this.pageActions.loadAll()
    ));

  @Effect() patchPost$ = this.actions$
    .ofType(PageActions.PATCH_POST)
    .map(action => action.payload)
    .switchMap(payload => this.pageService.patchPost(payload.id, payload.body)
      .mergeMap((res: any) => Observable.of(
        this.pageActions.patchPostSuccess(res)
        )
      )
      .catch((err) => Observable.of(
        this.pageActions.patchPostFail(err)
      ))
    );

  @Effect() patchPostSuccess$ = this.actions$
    .ofType(PageActions.PATCH_POST_SUCCESS)
    .mergeMap(() => Observable.of(
      this.pageActions.loadAll()
    ));

  @Effect() loadPages$ = this.actions$
    .ofType(PageActions.LOAD_PAGES)
    .do(x => console.log('REEEAAAL'))
    .switchMap((post) =>  this.pageService.loadAll())
      .mergeMap((res: any) => Observable.of(
        this.pageActions.loadPagesSuccess(res)
        )
      )
      .catch((err) => Observable.of(
        this.pageActions.loadPagesFail(err)
      ))

}

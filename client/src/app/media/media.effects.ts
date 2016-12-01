/* tslint:disable: member-ordering */
import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { MediaActions } from './media.actions';
import { AppState } from '../reducers';
import { MediaService } from './media.service';

@Injectable()

export class MediaEffects {
  constructor(
    private actions$: Actions,
    private store: Store<AppState>,
    private mediaService: MediaService,
    private mediaActions: MediaActions,
    private router: Router
  ) { }

  @Effect() loadMedia$ = this.actions$
    .ofType(MediaActions.LOAD_MEDIA)
    .switchMap((post) =>  this.mediaService.loadMedia())
      .mergeMap((res: any) => Observable.of(
        this.mediaActions.loadMediaSuccess(res)
        )
      )
      .catch((err) => Observable.of(
        this.mediaActions.loadMediaFail(err)
      ))

  @Effect() deleteMedia$ = this.actions$
    .ofType(MediaActions.DELETE_MEDIA)
    .map(action => action.payload)
    .switchMap(media => this.mediaService.deleteMedia(media.id)
      .mergeMap((res: any) => Observable.of(
        this.mediaActions.deleteMediaSuccess(res)
        )
      )
      .catch((err) => Observable.of(
        this.mediaActions.deleteMediaFail(err)
      ))
    );

  @Effect() deleteMediaSuccess$ = this.actions$
    .ofType(MediaActions.DELETE_MEDIA_SUCCESS)
    .mergeMap(() => Observable.of(
      this.mediaActions.loadMedia()
    ));
}

/* tslint:disable: member-ordering */
import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { UserActions } from './user.actions';
import { AppState } from '../reducers';
import { UserService } from './user.service';

@Injectable()

export class UserEffects {
  constructor(
    private actions$: Actions,
    private store: Store<AppState>,
    private userService: UserService,
    private userActions: UserActions
  ) { }

  @Effect() login$ = this.actions$
    .ofType(UserActions.LOGIN)
    .map(action => action.payload)
    .switchMap(user => this.userService.login(user.email, user.password)
      .mergeMap((res: any) => Observable.of(
        this.userActions.loginSuccess(res)
        )
      )
      .catch((err) => Observable.of(
        this.userActions.loginFail(err)
      ))
    );

  @Effect() loginSuccess$ = this.actions$
    .ofType(UserActions.LOGIN_SUCCESS)
    .map(action => action.payload)
    .switchMap(session => {
      this.userService.storeSession(session);

      return Observable.of(
        this.userActions.sessionStored()
      );
    });

  @Effect() logout$ = this.actions$
    .ofType(UserActions.LOGOUT)
    .map(action => action.payload)
    .switchMap(() => {
      this.userService.logout()
        .catch((err) => Observable.of(
          this.userActions.logoutFail(err)
        ))
      return Observable.of(
        this.userActions.logoutSuccess()
      );
    }

    );

  @Effect() logoutSuccess$ = this.actions$
    .ofType(UserActions.LOGOUT_SUCCESS)
    .map(action => action.payload)
    .switchMap(session => {
      this.userService.destroySession();
      return Observable.of(
        this.userActions.sessionDestroyed()
      );
    });
}

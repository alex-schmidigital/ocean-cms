/* tslint:disable: member-ordering */
import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { Action } from '@ngrx/store';

import { User } from './user.model';

@Injectable()

export class UserActions {

  static EDIT_USER = '[User] Edit User';
  editUser(user: User): Action {
    return {
      type: UserActions.EDIT_USER,
      payload: user
    };
  }

  static LOGIN = '[User] Login';
  login(email: string, password: string): Action {
    return {
      type: UserActions.LOGIN,
      payload: {
        email,
        password
      }
    };
  }

  static LOGIN_FAIL = '[User] Login Fail';
  loginFail(err: Error): Action {
    return {
      type: UserActions.LOGIN_FAIL,
      payload: err
    };
  }

  static LOGIN_SUCCESS = '[User] Login Success';
  loginSuccess(res: Response): Action {
    return {
      type: UserActions.LOGIN_SUCCESS,
      payload: res
    };
  }

  static SESSION_STORED = '[User] Session Stored';
  sessionStored(): Action {
    return {
      type: UserActions.SESSION_STORED,
    };
  }

  static SESSION_DESTROYED = '[User] Session Destroyed';
  sessionDestroyed(): Action {
    return {
      type: UserActions.SESSION_DESTROYED,
    };
  }

  static LOGOUT = '[User] Logout';
  logout(): Action {
    return {
      type: UserActions.LOGOUT
    };
  }

  static LOGOUT_FAIL = '[User] Logout Fail';
  logoutFail(err: Error): Action {
    return {
      type: UserActions.LOGOUT_FAIL,
      payload: err
    };
  }

  static LOGOUT_SUCCESS = '[User] Logout Success';
  logoutSuccess(): Action {
    return {
      type: UserActions.LOGOUT_SUCCESS
    };
  }
}

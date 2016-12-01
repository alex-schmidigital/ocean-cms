import { Component, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { UserActions } from '../../user/user.actions';
import { AppState } from '../../reducers';

@Component({
  selector: 'login-comp',
  templateUrl: './login.component.html',
  styleUrls: ['./login.style.css']
})

export class LoginComponent {

  password: string = '';

  email: string = '';
  constructor(
    private store: Store<AppState>,
    private userActions: UserActions
  ) {

  }

  login() {
    this.store.dispatch(this.userActions.login(this.email, this.password));
  }

  logout() {
    this.store.dispatch(this.userActions.logout());
  }

  checkIfEmpty(event) {
    if(event === '')
      return true;
  }
}

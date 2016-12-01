import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Auth } from './auth';

@Injectable()
export class AuthGuard implements CanActivate{
  
  constructor(private auth: Auth) {
  }

  canActivate() {
    return this.auth.isAuthenticated();
  }
}

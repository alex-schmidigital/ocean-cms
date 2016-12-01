import { Injectable } from '@angular/core';

@Injectable()
export class Auth {

  constructor() {
  }

  isAuthenticated() {
    let sessionInfo: any = localStorage.getItem('sessionInfo')
    if (sessionInfo !== null && JSON.parse(sessionInfo)['id'])
      sessionInfo = true;
    else  {
      sessionInfo = false;
    }
    return sessionInfo;
  }
}

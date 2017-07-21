import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class SessionService {
  baseUrl: string = 'http://localhost:3000';

  private loggedInSource = new Subject<any>();

  loggedIn$ = this.loggedInSource.asObservable();
  // app component will subscribe to "loggedIn$"

  constructor(
    private myHttpThang: Http
  ) { }

  loggedIn (userInfo) {
      this.loggedInSource.next(userInfo);
  }

  checkLogin() {
      return this.myHttpThang
        .get(
          this.baseUrl + '/api/checklogin',
          { withCredentials: true }
        )
        .toPromise()
        .then(res => res.json());
  }

  login(email, password) {
      return this.myHttpThang
        .post(
          this.baseUrl + '/api/login',
          {
            loginEmail: email,
            loginPassword: password
          },
          { withCredentials: true }
        )
        .toPromise()
        .then(res => res.json());
  }

  signup(userInfo) {
      return this.myHttpThang
        .post(
          this.baseUrl + '/api/signup',
          userInfo,
          { withCredentials: true }
        )
        .toPromise()
        .then(res => res.json());
  }

  logout() {
      return this.myHttpThang
        .post(
          this.baseUrl + '/api/logout',
          {},
          { withCredentials: true }
        )
        .toPromise()
        .then(res => res.json());
  }

}

import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class SessionService {

  constructor(private myHttp: Http) { }

  signup (user) {
    const theOriginalPromise = this.myHttp.post('http://localhost:3000/signup', user).toPromise();

    const theParsedPromise = theOriginalPromise.then((result) => {
      return result.json();
    });

    return theParsedPromise;
  }

  login (credentials) {
    const theOriginalPromise = this.myHttp.post('http://localhost:3000/login', credentials).toPromise();

    const theParsedPromise = theOriginalPromise.then((result) => {
      return result.json();
    });

    return theParsedPromise;
  }

  logout () {
    return this.myHttp.post('http://localhost:3000/logout', {})
      .toPromise()
      .then(result => result.json());
  }

  isLoggedIn () {
    return this.myHttp.get('http://localhost:3000/loggedin')
      .toPromise()
      .then(result => result.json());
  }

  getPrivate () {
    return this.myHttp.get('http://localhost:3000/private')
      .toPromise()
      .then(result => result.json());
  }

}

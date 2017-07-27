import { Component      } from '@angular/core';
import { Router         } from '@angular/router';
import { SessionService } from './session.service';


@Component({
  selector:      'app-root',
  templateUrl: './app.component.html',
  styleUrls:  ['./app.component.css']
})
export class AppComponent {
  title:      string = 'Quote on the Wall (tittle)';
  isLoggedIn: boolean = false;
  content:    string = 'A new world is waiting for you! content dummy';


  constructor(
    private sessionThang: SessionService,
    private routerThang: Router
  ) { }

  ngOnInit() {
    this.sessionThang.loggedIn$.subscribe((userFromApi) => {
      this.isLoggedIn = true;
    });

    this.sessionThang.checkLogin()
    // if logged in, redirect to /list
    .then((userInfo) => {
      //  this.routerThang.navigate(['profile']);
       this.isLoggedIn = true;
    })
    // else don't do anything
    .catch((err) => {
       this.routerThang.navigate(['/']);
    });
  }

  logMeOut() {
    this.sessionThang.logout()
    .then(() => {
      this.routerThang.navigate(['/'])
      this.isLoggedIn = false;
    })
    .catch(() => { });
  }
}

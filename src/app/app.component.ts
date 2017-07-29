import { Component      } from '@angular/core';
import { Router         } from '@angular/router';
import { SessionService } from './session.service';
import User from './models/users';


@Component({
  selector:      'app-root',
  templateUrl: './app.component.html',
  styleUrls:  ['./app.component.css']
})
export class AppComponent {
  title:      string = 'Hello!';
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
       this.isLoggedIn = true;
    })
    // else don't do anything
    .catch((err) => {
       this.routerThang.navigate(['/']);
    });
  }

  goToAbout() {
    this.routerThang.navigate(['about-us']);  // <!-- Programmatically navigate to home
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

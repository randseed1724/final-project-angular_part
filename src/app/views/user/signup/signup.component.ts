import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { SessionService } from '../../../session.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignUpComponent implements OnInit {
  newUser: any = {};

  errorMessage: string;

  constructor(
    private sessionThang: SessionService,
    private routerThang: Router
  ) { }

  ngOnInit() {
  }

  submitSignup() {
      this.sessionThang.signup(this.newUser)
        .then((userFromApi) => {
            this.routerThang.navigate(['/profile']);
            this.sessionThang.loggedIn(userFromApi);
        })
        .catch((errResponse) => {
            const apiInfo = errResponse.json();
            this.errorMessage = apiInfo.message;
        })
  }

}

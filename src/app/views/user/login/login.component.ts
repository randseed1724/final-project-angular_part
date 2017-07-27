import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from '../../../session.service';
import { SignUpComponent } from '../signup/signup.component';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LogInComponent implements OnInit {
  formEmail: string;
  formPassword: string;
  errorMessage: string;
  booleanito: boolean;


  constructor(
    private sessionThang: SessionService,
    private routerThang: Router
  ) { }

  ngOnInit() {
  }

  logMeOut() {
    this.sessionThang.logout()
    .then(() => {
      this.routerThang.navigate(['/#contact'])
      this.booleanito = false;
    })
    .catch(() => { });
  }

  submitLogin() {
    this.sessionThang.login(this.formEmail, this.formPassword)
      .then((userFromApi) => {
          this.booleanito = true;
          this.routerThang.navigate(['/']);
          this.sessionThang.loggedIn(userFromApi);
      })
      .catch((errResponse) => {
          const apiInfo = errResponse.json();
          this.errorMessage = apiInfo.message;
      });

  }
}

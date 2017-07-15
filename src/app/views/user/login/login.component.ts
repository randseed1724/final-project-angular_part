import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from '../../../session.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LogInComponent implements OnInit {
  formEmail: string;
  formPassword: string;
  errorMessage: string;

  constructor(
    private sessionThang: SessionService,
    private routerThang: Router
  ) { }

  ngOnInit() {
  }

  submitLogin() {
    this.sessionThang.login(this.formEmail, this.formPassword)
      .then((userFromApi) => {
          this.routerThang.navigate(['/lists']);
          this.sessionThang.loggedIn(userFromApi);
      })
      .catch((errResponse) => {
          const apiInfo = errResponse.json();
          this.errorMessage = apiInfo.message;
      });
  }
}

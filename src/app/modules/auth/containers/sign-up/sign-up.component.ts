import { Component } from '@angular/core';

import { RegisterData } from 'angular2-token';

import { AuthService } from './../../shared/auth.service';

@Component({
  selector: 'timer-sign-up',
  templateUrl: './sign-up.component.html',
})
export class AuthSignUpComponent {
  constructor(private auth: AuthService) {}

  handleSignUp(registerData: RegisterData): void {
    this.auth.signUp(registerData);
  }
}

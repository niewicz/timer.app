import { Component, Output, EventEmitter } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
} from '@angular/forms';
import { SignInData } from 'angular2-token';

@Component({
  selector: 'timer-sign-in-form',
  styleUrls: ['./../../auth-layout/auth-layout.component.scss'],
  templateUrl: './sign-in-form.component.html',
})
export class AuthSignInFormComponent {
  @Output() logIn = new EventEmitter<SignInData>();

  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  onLogIn(): void {
    console.log(this.form.value);
    if (this.form.valid) {
      this.logIn.emit({
        email: this.form.get('email').value,
        password: this.form.get('password').value,
      });
    }
  }
}

import { Component, Output, EventEmitter } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
} from '@angular/forms';
import { RegisterData } from 'angular2-token';

@Component({
  selector: 'timer-sign-up-form',
  styleUrls: ['./../../auth-layout/auth-layout.component.scss'],
  templateUrl: './sign-up-form.component.html',
})
export class AuthSignUpFormComponent {
  @Output() signUp = new EventEmitter<RegisterData>();

  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(128),
      ]),
      passwordConfirmation: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(128),
      ]),
    });
  }

  onSignUp(): void {
    if (this.form.valid) {
      this.signUp.emit({
        email: this.form.get('email').value,
        password: this.form.get('password').value,
        passwordConfirmation: this.form.get('passwordConfirmation').value,
      });
    }
  }
}

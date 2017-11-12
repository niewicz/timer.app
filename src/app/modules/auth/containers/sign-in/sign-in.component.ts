import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
} from '@angular/forms';
import { AuthService } from './../../shared/auth.service';

@Component({
  selector: 'timer-sign-in',
  templateUrl: './sign-in.component.html',
})
export class AuthSignInComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder, private auth: AuthService) {
    this.form = this.fb.group({
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
      ]),
    });
  }

  handleSubmit(): void {
    if (this.form.valid) {
      this.auth.logIn(
        this.form.get('email').value,
        this.form.get('password').value,
      );
    }
  }
}

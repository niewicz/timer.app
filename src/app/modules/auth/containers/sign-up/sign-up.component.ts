import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
} from '@angular/forms';
import { AuthService } from './../../shared/auth.service';

@Component({
  selector: 'timer-sign-up',
  templateUrl: './sign-up.component.html',
})
export class AuthSignUpComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder, private auth: AuthService) {
    this.form = this.fb.group({
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
      ]),
      passwordConfirmation: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
      ]),
    });
  }

  handleSubmit(): void {
    if (this.form.valid) {
      this.auth.signUp(
        this.form.get('email').value,
        this.form.get('password').value,
        this.form.get('passwordConfirmation').value,
      );
    }
  }
}

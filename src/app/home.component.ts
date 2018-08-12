import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthService } from './modules/auth/shared/auth.service';

@Component({
  selector: 'timer-home',
  template: `
    <div class="loading__wave">
      <span class="loading__wave--item"></span>
      <span class="loading__wave--item"></span>
      <span class="loading__wave--item"></span>
      <span class="loading__wave--item"></span>
    </div>
    <div class="loading__text">
      loading
    </div>
  `,
})
export class HomeComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    if (this.authService.isLoggedIn()) {
      this.router.navigate(['dashboard']);
    } else {
      this.router.navigate(['users', 'sign_in']);
    }
  }
}

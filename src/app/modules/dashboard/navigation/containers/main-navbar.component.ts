import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../../auth/shared/auth.service';

@Component({
  selector: 'timer-main-navbar',
  templateUrl: './main-navbar.component.html',
  styleUrls: ['./main-navbar.component.scss'],
})
export class MainNavbarComponent {
  constructor(private authService: AuthService, private router: Router) {}

  handleLogOut(): void {
    this.authService.signOut().subscribe();
  }
}

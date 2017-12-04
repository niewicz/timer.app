import { Router } from '@angular/router';
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { AuthService } from '../../../auth/shared/auth.service';

@Component({
  selector: 'timer-main-navbar',
  templateUrl: './main-navbar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainNavbarComponent {
  constructor(private authService: AuthService, private router: Router) {}

  handleLogOut(): void {
    this.authService.signOut().subscribe();
  }
}

import { Router } from '@angular/router';
import { Component, ChangeDetectionStrategy } from '@angular/core';
import {
  trigger,
  style,
  transition,
  animate,
  keyframes,
  query,
  stagger,
  group,
  state,
  animateChild,
} from '@angular/animations';

import { AuthService } from '../../../auth/shared/auth.service';

@Component({
  selector: 'timer-main-navbar',
  templateUrl: './main-navbar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./main-navbar.component.scss'],
  animations: [
    trigger('ngIfAnimation', [
      transition('void => *', [
        query('*', style({ opacity: 0 }), {
          optional: true,
        }),
        query(
          '*',
          stagger('40ms', [
            animate(
              '0.25s ease-in',
              keyframes([
                style({ opacity: 0, transform: 'translateY(-75%)', offset: 0 }),
                style({ opacity: 1, transform: 'translateY(0)', offset: 1.0 }),
              ]),
            ),
          ]),
          { optional: true },
        ),
      ]),
      transition('* => void', [
        query('*', style({ opacity: 1 }), {
          optional: true,
        }),
        query(
          '*',
          stagger('100ms', [
            animate('0.3s ease-out', keyframes([style({ opacity: 0 })])),
          ]),
          { optional: true },
        ),
      ]),
    ]),
  ],
})
export class MainNavbarComponent {
  showMenu = false;

  constructor(private authService: AuthService, private router: Router) {}

  handleLogOut(): void {
    this.authService.signOut().subscribe();
  }

  handleMenu(show: boolean) {
    this.showMenu = show;
  }
}

import {
  Component,
  ChangeDetectionStrategy,
  Output,
  EventEmitter,
} from '@angular/core';

@Component({
  selector: 'timer-main-navbar-menu',
  templateUrl: './main-navbar-menu.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainNavbarMenuComponent {
  @Output() logOut = new EventEmitter();

  onLogOut(): void {
    this.logOut.emit();
  }
}

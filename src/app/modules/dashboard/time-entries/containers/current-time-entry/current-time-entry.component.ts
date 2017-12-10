import {
  Component,
  ChangeDetectionStrategy,
  Output,
  EventEmitter,
} from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'timer-current-time-entry',
  templateUrl: './current-time-entry.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CurrentTimeEntryComponent {
  @Output() menu = new EventEmitter<boolean>();

  constructor(private fb: FormBuilder) {}

  handleMenu(show: boolean) {
    this.menu.emit(show);
  }
}

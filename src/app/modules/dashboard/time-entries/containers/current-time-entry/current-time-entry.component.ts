import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'timer-current-time-entry',
  templateUrl: './current-time-entry.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CurrentTimeEntryComponent {
  constructor(private fb: FormBuilder) {}
}

import { TimeEntriesSelectors } from '../../../../shared/time-entries/time-entries.selectors';
import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { TimeEntriesDispatchers } from '../../../../shared/time-entries/time-entries.dispatchers';
import { ITimeEntry } from '../../../../shared/time-entries/time-entries.interfaces';

@Component({
  selector: 'timer-time-entries-item',
  templateUrl: './time-entries-item.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TimeEntriesItemComponent {
  @Input() timeEntry: ITimeEntry;
}

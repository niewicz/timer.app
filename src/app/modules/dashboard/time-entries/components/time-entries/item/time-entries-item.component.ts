import { UtilsService } from './../../../../../../core/services/utils.service';
import { TimeEntriesSelectors } from '../../../../shared/time-entries/time-entries.selectors';
import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { TimeEntriesDispatchers } from '../../../../shared/time-entries/time-entries.dispatchers';
import { ITimeEntry } from '../../../../shared/time-entries/time-entries.interfaces';

@Component({
  selector: 'timer-time-entries-item',
  templateUrl: './time-entries-item.component.html',
  styleUrls: ['./time-entries-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TimeEntriesItemComponent {
  @Input() timeEntry: ITimeEntry;

  get duration() {
    return this.utils.getDuration(this.timeEntry.endAt, this.timeEntry.startAt);
  }

  constructor(private utils: UtilsService) {}
}

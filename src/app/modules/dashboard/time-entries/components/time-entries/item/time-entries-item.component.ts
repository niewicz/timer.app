import {
  Component,
  Input,
  ChangeDetectionStrategy,
  EventEmitter,
  Output,
} from '@angular/core';

import { UtilsService } from './../../../../../../core/services/utils.service';
import { TimeEntriesSelectors } from '../../../../shared/time-entries/time-entries.selectors';
import { TimeEntriesDispatchers } from '../../../../shared/time-entries/time-entries.dispatchers';
import { ITimeEntry } from '../../../../shared/time-entries/time-entries.interfaces';
import { IProject } from '../../../../shared/projects/projects.interfaces';

@Component({
  selector: 'timer-time-entries-item',
  templateUrl: './time-entries-item.component.html',
  styleUrls: ['./time-entries-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TimeEntriesItemComponent {
  showIcons = false;

  @Input() timeEntry: ITimeEntry;

  // @Output() updateProject = new EventEmitter<{id: }>();

  get duration() {
    return this.utils.getDuration(this.timeEntry.endAt, this.timeEntry.startAt);
  }

  constructor(private utils: UtilsService) {}

  onMouseenter(): void {
    this.showIcons = true;
  }

  onMouseleave(): void {
    this.showIcons = false;
  }

  handleSelectProject(event: IProject): void {
    // this.updateProject.emit(event);
  }
}

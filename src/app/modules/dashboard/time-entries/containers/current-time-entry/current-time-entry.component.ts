import {
  Component,
  ChangeDetectionStrategy,
  Output,
  EventEmitter,
} from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ITransferTimeEntry } from '../../../shared/time-entries/time-entries.interfaces';
import { TimeEntriesDispatchers } from '../../../shared/time-entries/time-entries.dispatchers';
import { TimeEntriesSelectors } from '../../../shared/time-entries/time-entries.selectors';

@Component({
  selector: 'timer-current-time-entry',
  templateUrl: './current-time-entry.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CurrentTimeEntryComponent {
  @Output() menu = new EventEmitter<boolean>();

  constructor(
    private fb: FormBuilder,
    private timeEntriesDispatchers: TimeEntriesDispatchers,
    private timeEntriesSelectors: TimeEntriesSelectors,
  ) {}

  handleMenu(show: boolean) {
    this.menu.emit(show);
  }

  handleCreate(entry: ITransferTimeEntry) {
    console.log(entry);
    this.timeEntriesDispatchers.createTimeEntry(entry);
  }

  handleUpdate(entry: ITransferTimeEntry) {
    console.log(entry);
    this.timeEntriesDispatchers.updateCurrentTimeEntry(entry);
  }

  handleStop(entry: ITransferTimeEntry) {
    console.log(entry);
    this.timeEntriesDispatchers.stopCurrentTimeEntry(entry);
  }
}

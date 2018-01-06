import {
  Component,
  ChangeDetectionStrategy,
  Output,
  EventEmitter,
  OnInit,
} from '@angular/core';

import {
  ITransferTimeEntry,
  ITimeEntry,
} from '../../../shared/time-entries/time-entries.interfaces';
import { TimeEntriesDispatchers } from '../../../shared/time-entries/time-entries.dispatchers';
import { TimeEntriesSelectors } from '../../../shared/time-entries/time-entries.selectors';
import { ITask } from '../../../shared/tasks/tasks.interfaces';
import { TasksDispatchers } from '../../../shared/tasks/tasks.dispatchers';

@Component({
  selector: 'timer-current-time-entry',
  templateUrl: './current-time-entry.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CurrentTimeEntryComponent implements OnInit {
  @Output() menu = new EventEmitter<boolean>();

  currentTimeEntry$ = this.timeEntriesSelectors.getCurrentTimeEntry();

  constructor(
    private timeEntriesDispatchers: TimeEntriesDispatchers,
    private timeEntriesSelectors: TimeEntriesSelectors,
    private tasksDispatchers: TasksDispatchers,
  ) {}

  ngOnInit(): void {
    this.timeEntriesDispatchers.getCurrentTimeEntry();
  }

  handleMenu(show: boolean): void {
    this.menu.emit(show);
  }

  handleCreateTimeEntry(entry: ITimeEntry): void {
    console.log(entry);
    this.timeEntriesDispatchers.createTimeEntry(entry);
  }

  handleUpdateTimeEntry(entry: ITimeEntry): void {
    console.log(entry);
    this.timeEntriesDispatchers.updateCurrentTimeEntry(entry);
  }

  handleUpdateTask(task: ITask): void {
    console.log(task);
    this.tasksDispatchers.updateTask(task);
  }

  handleStop(entry: ITransferTimeEntry) {
    console.log(entry);
    this.timeEntriesDispatchers.stopCurrentTimeEntry(entry);
  }
}

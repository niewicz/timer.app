import { Component, ChangeDetectionStrategy } from '@angular/core';

import { TimeEntriesSelectors } from './../../../shared/time-entries/time-entries.selectors';
import { TimeEntriesDispatchers } from '../../../shared/time-entries/time-entries.dispatchers';
import { ITimeEntry } from '../../../shared/time-entries/time-entries.interfaces';
import { TasksDispatchers } from '../../../shared/tasks/tasks.dispatchers';
import { ITask } from '../../../shared/tasks/tasks.interfaces';
import { AuthSelectors } from '../../../../auth/shared/auth.selectors';

@Component({
  selector: 'timer-time-entries',
  templateUrl: './time-entries.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TimeEntriesComponent {
  timeEntries$ = this.timeEntriesSelectors.getTimeEntries();
  pending$ = this.timeEntriesSelectors.isPending();
  total$ = this.timeEntriesSelectors.getTotal();
  currentTimeEntry$ = this.timeEntriesSelectors.getCurrentTimeEntry();
  currentUser$ = this.authSelectors.getCurrentUser();

  constructor(
    private timeEntriesDispatchers: TimeEntriesDispatchers,
    private timeEntriesSelectors: TimeEntriesSelectors,
    private tasksDispatchers: TasksDispatchers,
    private authSelectors: AuthSelectors,
  ) {
    this.timeEntriesDispatchers.getTimeEntries();
  }

  handleLoadMore(): void {
    this.timeEntriesDispatchers.loadMoreTimeEntries();
  }

  handleUpdateTimeEntry(event: ITimeEntry): void {
    this.timeEntriesDispatchers.updateTimeEntry(event);
  }

  handleUpdateTask(event: ITask): void {
    this.tasksDispatchers.updateTask(event);
  }

  handleRemoveTimeEntry(event: number): void {
    this.timeEntriesDispatchers.removeTimeEntry(event);
  }

  handleStartTimeEntry(event: ITimeEntry): void {
    this.timeEntriesDispatchers.createTimeEntry(event);
  }
}

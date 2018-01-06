import {
  Component,
  ChangeDetectionStrategy,
  OnChanges,
  Output,
  EventEmitter,
  ChangeDetectorRef,
  Input,
} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

import { UtilsService } from './../../../../../../core/services/utils.service';
import {
  ITransferTimeEntry,
  ITimeEntry,
} from './../../../../shared/time-entries/time-entries.interfaces';
import { IProject } from '../../../../shared/projects/projects.interfaces';
import { ITask } from '../../../../shared/tasks/tasks.interfaces';

@Component({
  selector: 'timer-current-time-entry-form',
  templateUrl: './current-time-entry-form.component.html',
  styleUrls: ['./current-time-entry-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class CurrentTimeEntryFormComponent implements OnChanges {
  @Input() currentTimeEntry: ITimeEntry;

  @Output() menu = new EventEmitter<boolean>();
  @Output() createTimeEntry = new EventEmitter<ITransferTimeEntry>();
  @Output() updateTimeEntry = new EventEmitter<ITimeEntry>();
  @Output() stop = new EventEmitter<ITimeEntry>();
  @Output() updateTask = new EventEmitter<ITask>();

  showMenu = false;

  timeEntry: FormGroup;
  toggling = false;
  toggled$: Subscription;
  duration = '00:00:00';

  selectedProject: IProject;
  selectedTask: ITask;

  constructor(
    private fb: FormBuilder,
    private cd: ChangeDetectorRef,
    private utils: UtilsService,
  ) {
    this.timeEntry = this.fb.group({
      id: '',
      startAt: '',
      endAt: '',
      taskId: '',
    });
  }

  ngOnChanges() {
    console.log(this.currentTimeEntry);
    if (this.currentTimeEntry) {
      this.timeEntry.patchValue({
        id: this.currentTimeEntry.id,
        startAt: this.currentTimeEntry.startAt,
      });
      this.continueToggling();
    }

    if (this.currentTimeEntry && this.currentTimeEntry.task) {
      this.timeEntry.patchValue({
        taskId: this.currentTimeEntry.task.id,
      });
      this.selectedTask = this.currentTimeEntry.task;

      if (this.currentTimeEntry.task.project) {
        this.selectedProject = this.currentTimeEntry.task.project;
        this.timeEntry.patchValue({
          projectId: this.currentTimeEntry.task.project.id,
        });
      }
    }
  }

  toggleMenu(): void {
    this.showMenu = !this.showMenu;
    this.menu.emit(this.showMenu);
  }

  startToggling(): void {
    this.timeEntry.patchValue({ startAt: new Date().toString() });
    this.createTimeEntry.emit(this.timeEntry.value);
    this.toggled$ = Observable.timer(0, 1000).subscribe(tick => {
      this.duration = this.utils.getDuration(
        new Date().toString(),
        this.timeEntry.get('startAt').value,
      );
      this.cd.detectChanges();
    });
    this.toggling = true;
  }

  continueToggling(): void {
    this.toggling = true;
    this.toggled$ = Observable.timer(0, 1000).subscribe(tick => {
      this.duration = this.utils.getDuration(
        new Date().toString(),
        this.timeEntry.get('startAt').value,
      );
      this.cd.detectChanges();
    });
  }

  stopToggling(): void {
    this.toggling = false;
    this.duration = '00:00:00';
    this.toggled$.unsubscribe();
    this.timeEntry.patchValue({ endAt: new Date().toString() });
    this.stop.emit(this.timeEntry.value);
    this.selectedProject = undefined;
    this.timeEntry.reset();
  }

  onSelectTask(event: ITask): void {
    this.timeEntry.patchValue({ taskId: event.id });

    if (this.toggling) {
      this.updateTimeEntry.emit(this.timeEntry.value);
    }
  }

  onSelectProject(event: IProject): void {
    this.updateTask.emit(
      Object.assign({}, this.selectedTask, { projectId: event.id }),
    );
  }
}

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
  @Output() create = new EventEmitter<ITransferTimeEntry>();
  @Output() update = new EventEmitter<ITransferTimeEntry>();
  @Output() stop = new EventEmitter<ITransferTimeEntry>();

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
      projectId: '',
    });
  }

  ngOnChanges() {
    if (this.currentTimeEntry) {
      this.timeEntry.patchValue({
        id: this.currentTimeEntry.id,
        startAt: this.currentTimeEntry.startAt,
      });
    }

    if (this.currentTimeEntry && this.currentTimeEntry.project) {
      this.selectedProject = this.currentTimeEntry.project;
      this.timeEntry.patchValue({
        projectId: this.currentTimeEntry.project.id,
      });
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

  toggleMenu() {
    this.showMenu = !this.showMenu;
    this.menu.emit(this.showMenu);
  }

  startToggling(): void {
    this.timeEntry.patchValue({ startAt: new Date().toString() });
    this.create.emit(this.timeEntry.value);
    this.toggled$ = Observable.timer(0, 1000).subscribe(tick => {
      this.duration = this.utils.getDuration(
        new Date().toString(),
        this.timeEntry.get('startAt').value,
      );
      this.cd.detectChanges();
    });
    this.toggling = true;
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
    this.selectedTask = event;
    if (event.project) {
      this.selectedProject = event.project;
    }

    if (this.toggling) {
      this.update.emit(this.timeEntry.value);
    }
  }

  onSelectProject(event: IProject): void {
    this.timeEntry.patchValue({ projectId: event.id });
    this.selectedProject = event;

    if (this.toggling) {
      this.update.emit(this.timeEntry.value);
    }
  }
}

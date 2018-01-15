import {
  Component,
  Input,
  Output,
  ChangeDetectionStrategy,
  EventEmitter,
  ElementRef,
  ViewChild,
} from '@angular/core';

import { ITask } from '../../../../shared/tasks/tasks.interfaces';

@Component({
  selector: 'timer-select-task-menu',
  templateUrl: './select-task-menu.component.html',
  styleUrls: ['./select-task-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SelectTaskMenuComponent {
  @Input() displayText: string;
  @Input() selectedTask: ITask;
  @Input() tasks: ITask[];
  @Input() navbar = false;

  @Output() selectTask = new EventEmitter<ITask>();
  @Output() createTask = new EventEmitter<ITask>();
  @Output() search = new EventEmitter<string>();
  @Output() forceClear = new EventEmitter();

  @ViewChild('inputTask') input: ElementRef;

  showHint = false;

  onClick(task: ITask): void {
    this.selectTask.emit(task);
    this.forceClear.emit();
  }

  onEnter(event: string): void {
    this.showHint = false;
    if (event.length > 1) {
      if (this.selectedTask && this.selectedTask.project) {
        this.createTask.emit({
          title: event,
          projectId: this.selectedTask.projectId,
        });
      } else {
        this.createTask.emit({ title: event });
      }
    } else {
      if (this.selectedTask) {
        this.input.nativeElement.value = this.selectedTask.title;
      }
    }
  }

  onBlur(event: string) {
    if (event.length < 2 && this.selectedTask) {
      this.input.nativeElement.value = this.selectedTask.title;
    }
    if (this.selectedTask && event === this.selectedTask.title) {
      this.showHint = false;
    }
  }

  onSearch(q: string): void {
    if (this.selectedTask && q !== this.selectedTask.title || !this.selectedTask && q.length > 0) {
      this.showHint = true;
    } else {
      this.showHint = false;
    }
    if (q.length >= 2) {
      this.search.emit(q);
    } else {
      this.forceClear.emit();
    }
  }
}

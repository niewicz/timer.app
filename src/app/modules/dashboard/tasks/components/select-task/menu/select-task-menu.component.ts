import {
  Component,
  Input,
  Output,
  ChangeDetectionStrategy,
  EventEmitter,
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
  @Output() search = new EventEmitter<string>();
  @Output() forceClear = new EventEmitter();

  onClick(task: ITask): void {
    this.selectTask.emit(task);
    this.forceClear.emit();
  }

  onBlur() {
    // this.forceClear.emit();
  }

  onSearch(q: string): void {
    if (q.length >= 2) {
      this.search.emit(q);
    } else {
      this.forceClear.emit();
    }
  }
}

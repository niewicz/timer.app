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

  @Output() choice = new EventEmitter<ITask>();
  @Output() search = new EventEmitter<string>();

  onClick(task: ITask): void {
    this.choice.emit(task);
  }

  onSearch(q: string): void {
    if (q.length >= 2) {
      this.search.emit(q);
    } else {
      this.tasks = undefined;
    }
  }
}

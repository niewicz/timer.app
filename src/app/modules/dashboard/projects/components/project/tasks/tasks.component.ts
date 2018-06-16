import { Component, Input } from '@angular/core';

import { ITask } from '../../../../shared/tasks/tasks.interfaces';

@Component({
  selector: 'timer-project-tasks',
  template: `
    <div
      class="container">
      <div
        class="text--subtitle">
        tasks
      </div>
      <timer-project-task
        *ngFor="let task of tasks"
        [task]="task">
      </timer-project-task>
    </div>
  `,
  styleUrls: ['../../../containers/project/project.component.scss'],
})
export class ProjectTasksComponent {
  @Input() tasks: ITask[];
}

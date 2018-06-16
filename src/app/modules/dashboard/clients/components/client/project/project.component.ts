import { Component, Input } from '@angular/core';

import { UtilsService } from '../../../../../../core/services/utils.service';
import { IProject } from '../../../../shared/projects/projects.interfaces';

@Component({
  selector: 'timer-client-project',
  template: `
    <div
      fxLayout="column"
      fxLayoutGap="10px"
      class="project">
      <div
        fxLayout="row"
        fxLayoutAlign="space-between center">
        <div
          class="app-button-2"
          [routerLink]="['/', 'dashboard', 'projects', project?.id]">
          {{ project?.title }}
        </div>
        <div
          class="project__tracked">
            {{ getDuration(project?.totalTracked) }}
        </div>
      </div>
      <div class="text--normal">
        {{ project?.taskCounter }} TASKS
      </div>
    </div>
  `,
  styleUrls: ['../../../containers/client/client.component.scss'],
})
export class ClientProjectComponent {
  @Input() project: IProject;

  constructor(private utils: UtilsService) {}

  getDuration(sec: number): string {
    return this.utils.fromSecToFormattedDuration(sec, true);
  }
}

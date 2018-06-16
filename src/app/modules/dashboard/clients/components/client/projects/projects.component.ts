import { Component, Input } from '@angular/core';

import { IProject } from '../../../../shared/projects/projects.interfaces';

@Component({
  selector: 'timer-client-projects',
  template: `
    <div
      class="container">
      <div
        class="text--subtitle">
        projects
      </div>
      <timer-client-project
        *ngFor="let project of projects"
        [project]="project">
      </timer-client-project>
    </div>
  `,
  styleUrls: ['../../../containers/client/client.component.scss'],
})
export class ClientProjectsComponent {
  @Input() projects: IProject[];
}

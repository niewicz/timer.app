import { Component, Input } from '@angular/core';

import { IProject } from '../../../../shared/projects/projects.interfaces';

@Component({
  selector: 'timer-project-header',
  templateUrl: './header.component.html',
  styleUrls: ['../../../containers/project/project.component.scss'],
})
export class ProjectHeaderComponent {
  @Input() project: IProject;
}

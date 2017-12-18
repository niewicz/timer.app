import { Component } from '@angular/core';

import { ProjectsDispatchers } from '../../../shared/projects/projects.dispatchers';
import { IProject } from '../../../shared/projects/projects.interfaces';

@Component({
  selector: 'timer-create-project',
  templateUrl: './create-project.component.html',
})
export class CreateProjectComponent {
  constructor(private dispatchers: ProjectsDispatchers) {}

  handleCreate(event: IProject) {
    this.dispatchers.createProject(event);
  }
}

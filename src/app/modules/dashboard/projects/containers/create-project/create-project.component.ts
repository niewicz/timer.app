import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { ProjectsDispatchers } from '../../../shared/projects/projects.dispatchers';
import { IProject } from '../../../shared/projects/projects.interfaces';

@Component({
  selector: 'timer-create-project',
  templateUrl: './create-project.component.html',
})
export class CreateProjectComponent {
  constructor(
    private dispatchers: ProjectsDispatchers,
    private router: Router,
  ) {}

  handleCreate(event: IProject) {
    this.dispatchers.createProject(event);
    this.router.navigate([{ outlets: { modal: null } }]);
  }
}

import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ProjectsDispatchers } from './../../../shared/projects/projects.dispatchers';
import { ProjectsSelectors } from '../../../shared/projects/projects.selectors';
import { IProject } from '../../../shared/projects/projects.interfaces';

@Component({
  selector: 'timer-edit-project',
  templateUrl: './edit-project.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditProjectComponent implements OnInit {
  project$ = this.selectors.getEditProject();

  projectId = parseInt(this.route.snapshot.params.projectId, 10);

  constructor(
    private dispatchers: ProjectsDispatchers,
    private selectors: ProjectsSelectors,
    private route: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit() {
    this.dispatchers.editProject(this.projectId);
  }

  handleUpdate(event: IProject) {
    this.dispatchers.updateProject(event);
    this.router.navigate([{ outlets: { modal: null } }]);
  }
}

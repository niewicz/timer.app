import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ProjectsDispatchers } from '../../../shared/projects/projects.dispatchers';
import { ProjectsSelectors } from '../../../shared/projects/projects.selectors';

@Component({
  selector: 'timer-project',
  template: `
    <timer-project-header
      [project]="project$ | async">
    </timer-project-header>

    <timer-project-tasks
      [tasks]="(project$ | async)?.tasks">
    </timer-project-tasks>
  `,
})
export class ProjectComponent implements OnInit {
  project$ = this.projectsSelectors.getProject();

  projectId = parseInt(this.route.snapshot.params.projectId, 10);

  constructor(
    private projectsDispatchers: ProjectsDispatchers,
    private projectsSelectors: ProjectsSelectors,
    private route: ActivatedRoute,
  ) {}

  ngOnInit() {
    this.projectsDispatchers.getProject(this.projectId);
  }
}

import { ProjectsSelectors } from './../../../shared/projects/projects.selectors';
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ProjectsDispatchers } from '../../../shared/projects/projects.dispatchers';

@Component({
  selector: 'timer-projects',
  templateUrl: './projects.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectsComponent {
  projects$ = this.projectsSelectors.getProjects();

  constructor(
    private projectsDispatchers: ProjectsDispatchers,
    private projectsSelectors: ProjectsSelectors,
  ) {
    this.projectsDispatchers.getProjects();
  }

  handleSearchProjects(event: string): void {
    this.projectsDispatchers.searchProjects({ q: event });
  }
}

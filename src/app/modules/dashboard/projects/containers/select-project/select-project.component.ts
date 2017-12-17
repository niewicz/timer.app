import { Component, Input, OnInit, OnChanges } from '@angular/core';

import { ProjectsDispatchers } from '../../../shared/projects/projects.dispatchers';
import { ProjectsSelectors } from './../../../shared/projects/projects.selectors';

@Component({
  selector: 'timer-select-project',
  templateUrl: './select-project.component.html',
})
export class SelectProjectComponent implements OnChanges {
  @Input() displayText: string;

  projects$ = this.selectors.getProjects();

  constructor(
    private dispatchers: ProjectsDispatchers,
    private selectors: ProjectsSelectors,
  ) {}

  ngOnChanges() {
    console.log('jaja');
    this.dispatchers.getProjects();
  }
}

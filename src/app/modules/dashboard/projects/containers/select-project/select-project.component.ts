import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';

import { ProjectsDispatchers } from '../../../shared/projects/projects.dispatchers';
import { ProjectsSelectors } from './../../../shared/projects/projects.selectors';
import { IProject } from '../../../shared/projects/projects.interfaces';

@Component({
  selector: 'timer-select-project',
  templateUrl: './select-project.component.html',
})
export class SelectProjectComponent implements OnInit {
  @Input() displayText: string;
  @Input() selectedProject: IProject;
  @Input() navbar: boolean;

  @Output() selectProject = new EventEmitter<IProject>();

  projects$ = this.selectors.getProjects();

  constructor(
    private dispatchers: ProjectsDispatchers,
    private selectors: ProjectsSelectors,
  ) {}

  ngOnInit() {
    this.dispatchers.getProjects();
  }

  handleChoice(event: IProject) {
    this.selectProject.emit(event);
  }

  handleSearch(event: string) {
    this.dispatchers.searchProjects({ q: event });
  }
}

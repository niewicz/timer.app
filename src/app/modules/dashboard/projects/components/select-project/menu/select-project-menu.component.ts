import { Component, Input, EventEmitter, Output } from '@angular/core';

import { IProject } from '../../../../shared/projects/projects.interfaces';

@Component({
  selector: 'timer-select-project-menu',
  templateUrl: './select-project-menu.component.html',
  styleUrls: ['./select-project-menu.component.scss'],
})
export class SelectProjectMenuComponent {
  @Input() projects: IProject[];
  @Input() selected: IProject;
  @Input() text: string;

  @Output() choice = new EventEmitter<IProject>();
  @Output() search = new EventEmitter<string>();

  onInput(event: string) {
    this.search.emit(event);
  }

  onClick(project: IProject) {
    this.choice.emit(project);
  }
}

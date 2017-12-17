import { Component, Input } from '@angular/core';
import { IProject } from '../../../../shared/projects/projects.interfaces';
@Component({
  selector: 'timer-select-project-menu',
  templateUrl: './select-project-menu.component.html',
  styleUrls: ['./select-project-menu.component.scss'],
})
export class SelectProjectMenuComponent {
  @Input() projects: IProject;

  onInput(event: any) {
    console.log(event);
  }
}

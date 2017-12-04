import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { IProject } from '../../../../shared/projects/projects.interfaces';

@Component({
  selector: 'timer-projects-item',
  templateUrl: './projects-item.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectsItemComponent {
  @Input() project: IProject;
}

import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { IProject } from '../../../../shared/projects/projects.interfaces';

@Component({
  selector: 'timer-projects-item',
  templateUrl: './projects-item.component.html',
  styleUrls: ['./projects-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectsItemComponent {
  @Input() project: IProject;

  showIcons = false;

  onMouseover(): void {
    this.showIcons = true;
  }

  onMouseleave(): void {
    this.showIcons = false;
  }
}

import {
  Component,
  ChangeDetectionStrategy,
  Input,
  EventEmitter,
  Output,
} from '@angular/core';

import { IProject } from '../../../../shared/projects/projects.interfaces';

@Component({
  selector: 'timer-projects-item',
  templateUrl: './projects-item.component.html',
  styleUrls: ['./projects-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectsItemComponent {
  @Input() project: IProject;

  @Output() remove = new EventEmitter<number>();

  showIcons = false;

  onMouseover(): void {
    this.showIcons = true;
  }

  onMouseleave(): void {
    this.showIcons = false;
  }

  onRemove(): void {
    this.remove.emit(this.project.id);
  }
}

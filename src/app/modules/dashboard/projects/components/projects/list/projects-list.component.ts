import {
  Component,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';

import { IProject } from '../../../../shared/projects/projects.interfaces';

@Component({
  selector: 'timer-projects-list',
  templateUrl: './projects-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectsListComponent {
  @Input() projects: IProject[];

  @Output() removeProject = new EventEmitter<number>();

  handleRemove(event: number): void {
    this.removeProject.emit(event);
  }
}

import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

import { UtilsService } from '../../../../../../core/services/utils.service';
import { IProject } from '../../../../shared/projects/projects.interfaces';

@Component({
  selector: 'timer-summary-last-projects',
  templateUrl: './last-projects.component.html',
  styleUrls: ['./last-projects.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SummaryLastProjectsComponent {
  @Input() projects: IProject[];

  constructor(private utils: UtilsService) {}

  getDuration(sec: number): string {
    return this.utils.fromSecToFormattedDuration(sec);
  }
}

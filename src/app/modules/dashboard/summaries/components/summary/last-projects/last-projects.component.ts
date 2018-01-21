import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

import { IProject } from '../../../../shared/projects/projects.interfaces';

@Component({
  selector: 'timer-summary-last-projects',
  templateUrl: './last-projects.component.html',
  styleUrls: ['./last-projects.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SummaryLastProjectsComponent {
  @Input() projects: IProject;
}

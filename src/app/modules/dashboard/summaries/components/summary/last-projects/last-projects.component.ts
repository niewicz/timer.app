import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

import { IProject } from '../../../../shared/projects/projects.interfaces';

@Component({
  selector: 'timer-summary-last-projects',
  templateUrl: './last-projects.component.html',
  styleUrls: ['./last-projects.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SummaryLastProjectsComponent {
  @Input() projects: IProject[];

  getDuration(sec: number): string {
    if (!sec) {
      sec = 0;
    }

    const min = Math.floor(sec / 60) % 60;
    const hour = Math.floor(sec / 3600);

    const partMin = min < 10 ? `0${min}` : `${min}`;

    return `${hour}:${partMin}`;
  }
}

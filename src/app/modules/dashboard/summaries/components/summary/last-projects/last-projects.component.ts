import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

import { IProject } from '../../../../shared/projects/projects.interfaces';

@Component({
  selector: 'timer-summary-last-projects',
  templateUrl: './last-projects.component.html',
  styleUrls: ['./last-projects.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SummaryLastProjectsComponent {
  @Input()
  projects: IProject[] = [
    {
      title: 'ABC',
      client: {
        name: 'Prowly',
      },
    },
  ];

  data: IProject[] = [
    {
      title: 'ABC',
      client: {
        name: 'Prowly',
      },
    },
    {
      title: 'Echolokacja i systemy wbydowane',
      client: {
        name: 'Germain & Filz',
      },
    },
    {
      title: 'Testy audytoryjne',
      client: {
        name: 'Prowly',
      },
    },
  ];
}

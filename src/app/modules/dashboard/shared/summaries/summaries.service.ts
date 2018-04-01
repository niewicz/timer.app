import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { UtilsService } from '../../../../core/services/utils.service';
import { ApiRoutes } from '../../../../core/services/api-routes.service';
import {
  IChartDataResponse,
  IChartData,
  ILastProjectsResponse,
  IChartParams,
} from './summaries.interfaces';
import { IProject } from '../projects/projects.interfaces';

@Injectable()
export class SummariesService {
  constructor(
    private http: HttpClient,
    private utils: UtilsService,
    private api: ApiRoutes,
  ) {}

  getSummary(params: IChartParams): Observable<IChartData[]> {
    return this.http
      .get<IChartDataResponse>(this.api.summariesWorkloadPath(), {
        params: new HttpParams()
          .set('time_range', params.timeRange ? params.timeRange : '')
          .set('day_start', params.dayStart ? params.dayStart : '')
          .set('day_end', params.dayEnd ? params.dayEnd : ''),
      })
      .map(response => response.data)
      .map(response => this.utils.camelize(response))
      .catch(error => Observable.throw(error));
  }

  getLastProjects(): Observable<IProject[]> {
    return this.http
      .get<ILastProjectsResponse>(this.api.summariesLastProjectsPath())
      .map(response => response.projects)
      .map(response => this.utils.camelize(response))
      .catch(error => Observable.throw(error));
  }
}

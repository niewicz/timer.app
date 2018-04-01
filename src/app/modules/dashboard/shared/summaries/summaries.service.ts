import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { UtilsService } from '../../../../core/services/utils.service';
import { ApiRoutes } from '../../../../core/services/api-routes.service';
import {
  IChartDataResponse,
  IChartData,
  ILastProjectsResponse,
} from './summaries.interfaces';
import { IProject } from '../projects/projects.interfaces';

@Injectable()
export class SummariesService {
  constructor(
    private http: HttpClient,
    private utils: UtilsService,
    private api: ApiRoutes,
  ) {}

  getSummary(params: any): Observable<IChartData[]> {
    return this.http
      .get<IChartDataResponse>(this.api.summariesWorkloadPath())
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

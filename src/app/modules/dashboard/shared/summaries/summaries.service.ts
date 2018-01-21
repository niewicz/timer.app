import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { UtilsService } from '../../../../core/services/utils.service';
import { ApiRoutes } from '../../../../core/services/api-routes.service';
import { IChartDataResponse, IChartData } from './summaries.interfaces';

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
      .catch(error => Observable.throw(error));
  }
}

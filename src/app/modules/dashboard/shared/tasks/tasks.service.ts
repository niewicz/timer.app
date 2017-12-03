import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { UtilsService } from '../../../../core/services/utils.service';

import { ApiRoutes } from '../../../../core/services/api-routes.service';
import { ITask, ITasksParams, ITasksResponse } from './tasks.interfaces';

@Injectable()
export class TasksService {
  constructor(
    private http: HttpClient,
    private utils: UtilsService,
    private api: ApiRoutes,
  ) {}

  getTasks(params: ITasksParams): Observable<ITask[]> {
    return this.http
      .get<ITasksResponse>(this.api.tasksPath(), {
        params: new HttpParams()
          .set('limit', params.limit ? params.limit.toString() : '')
          .set('offest', params.offset ? params.offset.toString() : '')
          .set('client_id', params.clientId ? params.clientId.toString() : '')
          .set(
            'project_id',
            params.projectId ? params.projectId.toString() : '',
          )
          .set('q', params.q ? params.q : ''),
      })
      .map(response => this.utils.camelize(response))
      .map(response => response.tasks)
      .catch(error => Observable.throw(error));
  }
}

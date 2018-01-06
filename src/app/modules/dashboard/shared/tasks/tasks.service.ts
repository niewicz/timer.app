import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { UtilsService } from '../../../../core/services/utils.service';

import { ApiRoutes } from '../../../../core/services/api-routes.service';
import {
  ITask,
  ITasksParams,
  ITaskResponse,
  ITasksResponse,
} from './tasks.interfaces';

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

  createTask(params: ITask): Observable<ITask> {
    const task = this.utils.decamelize(params);
    return this.http
      .post<ITaskResponse>(this.api.tasksPath(), { task })
      .map(response => this.utils.camelize(response))
      .map(response => response.task)
      .catch(error => Observable.throw(error));
  }

  updateTask(params: ITask): Observable<ITask> {
    const task = this.utils.decamelize(params);
    return this.http
      .patch<ITaskResponse>(this.api.taskPath(params.id), { task })
      .map(response => this.utils.camelize(response))
      .map(response => response.task)
      .catch(error => Observable.throw(error));
  }
}

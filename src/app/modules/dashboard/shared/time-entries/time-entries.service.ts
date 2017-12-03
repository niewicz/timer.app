import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { UtilsService } from '../../../../core/services/utils.service';
import {
  ITimeEntriesParams,
  ITimeEntry,
  ITimeEntriesResponse,
  IClientsParams,
  ITask,
  IProjectsParams,
  IProject,
  IProjectsResponse,
} from './time-entries.interfaces';
import { ApiRoutes } from '../../../../core/services/api-routes.service';
import {
  IClient,
  IClientsResponse,
  ITasksParams,
  ITasksResponse,
} from './time-entries.interfaces';

@Injectable()
export class TimeEntriesService {
  constructor(
    private http: HttpClient,
    private utils: UtilsService,
    private api: ApiRoutes,
  ) {}

  getTimeEntries(params: ITimeEntriesParams): Observable<ITimeEntry[]> {
    return this.http
      .get<ITimeEntriesResponse>(this.api.timeEntriesPath(), {
        params: new HttpParams()
          .set('limit', params.limit ? params.limit.toString() : '')
          .set('offest', params.offset ? params.offset.toString() : '')
          .set('since', params.since ? params.since.toString() : '')
          .set('to', params.to ? params.to.toString() : ''),
      })
      .map(response => this.utils.camelize(response))
      .map(response => response.timeEntries)
      .catch(error => Observable.throw(error));
  }

  getClients(params: IClientsParams): Observable<IClient[]> {
    return this.http
      .get<IClientsResponse>(this.api.clientsPath(), {
        params: new HttpParams()
          .set('limit', params.limit ? params.limit.toString() : '')
          .set('offset', params.offset ? params.offset.toString() : '')
          .set('q', params.q ? params.q : ''),
      })
      .map(response => this.utils.camelize(response))
      .map(response => response.clients)
      .catch(error => Observable.throw(error));
  }

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

  getProjects(params: IProjectsParams): Observable<IProject[]> {
    return this.http
      .get<IProjectsResponse>(this.api.projectsPath(), {
        params: new HttpParams()
          .set('limit', params.limit ? params.limit.toString() : '')
          .set('offest', params.offset ? params.offset.toString() : '')
          .set('client_id', params.clientId ? params.clientId.toString() : '')
          .set('q', params.q ? params.q : ''),
      })
      .map(response => this.utils.camelize(response))
      .map(response => response.projects)
      .catch(error => Observable.throw(error));
  }
}

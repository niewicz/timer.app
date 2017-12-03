import { IProject } from './../projects/projects.interfaces';
import { IClient } from './../clients/clients.interfaces';
import { ITask } from './../tasks/tasks.interfaces';

export interface ITimeEntry {
  id?: number;
  taskId?: number;
  startAt: string;
  endAt?: string;
  task?: ITask;
  project?: IProject;
  client?: IClient;
}

export interface ITimeEntriesParams {
  limit?: number;
  offset?: number;
  taskId?: number;
  since?: string;
  to?: string;
}

export interface ITimeEntriesResponse {
  timeEntries: ITimeEntry[];
}

export interface ITimeEntryResponse {
  timeEntry: ITimeEntry;
}

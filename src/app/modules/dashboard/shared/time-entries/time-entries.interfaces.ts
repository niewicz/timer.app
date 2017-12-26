import { IProject } from './../projects/projects.interfaces';
import { IClient } from './../clients/clients.interfaces';
import { ITask } from './../tasks/tasks.interfaces';

export interface ITimeEntry {
  id?: number;
  startAt: string;
  endAt?: string;
  task?: ITask;
  taskId?: number;
  project?: IProject;
  projectId?: number;
}

export interface ITimeEntriesParams {
  limit?: number;
  offset?: number;
  taskId?: number;
  since?: string;
  to?: string;
}

export interface ITransferTimeEntry {
  id?: number;
  startAt: string;
  endAt?: string;
  taskId?: number;
}

export interface ITimeEntriesResponse {
  timeEntries: ITimeEntry[];
  total: number;
}

export interface ITimeEntryResponse {
  timeEntry: ITimeEntry;
}

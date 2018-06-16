import { IClient } from '../clients/clients.interfaces';
import { ITask } from '../tasks/tasks.interfaces';

export interface IProject {
  id?: number;
  clientId?: number;
  title: string;
  description?: string;
  client?: IClient;
  taskCounter?: number;
  lastTask?: ITask;
  totalTracked?: number;
  tasks?: ITask;
}

export interface IProjectsParams {
  limit?: number;
  offset?: number;
  clientId?: number;
  q?: string;
}

export interface IProjectsResponse {
  projects: IProject[];
  total: number;
}

export interface IProjectResponse {
  project: IProject;
}

import { IProject } from './../projects/projects.interfaces';
export interface ITask {
  id?: number;
  projectId?: number;
  clientId?: number;
  title: string;
  price?: number;
  currency?: string;
  totalTime?: string;
  project?: IProject;
}

export interface ITasksParams {
  limit?: number;
  offset?: number;
  clientId?: number;
  projectId?: number;
  q?: string;
}

export interface ITasksResponse {
  tasks: ITask[];
}

export interface ITaskResponse {
  task: ITask;
}

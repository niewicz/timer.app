export interface ITask {
  id?: number;
  projectId?: number;
  clientId?: number;
  title: string;
  price?: number;
  totalTime?: string;
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

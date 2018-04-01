import { IProject } from '../projects/projects.interfaces';

export interface IChartData {
  name: string;
  value: number;
}

export interface IChartDataResponse {
  data: IChartData[];
}

export interface ILastProjectsResponse {
  projects: IProject[];
}

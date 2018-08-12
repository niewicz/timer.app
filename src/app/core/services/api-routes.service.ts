import { Injectable } from '@angular/core';

@Injectable()
export class ApiRoutes {
  // time entries
  public timeEntriesPath(): string {
    return `${this.apiBasePath()}/time_entries`;
  }

  public timeEntryPath(id: number): string {
    return `${this.apiBasePath()}/time_entries/${id}`;
  }

  public currentTimeEntryPath(): string {
    return `${this.apiBasePath()}/time_entries/current`;
  }

  // clients
  public clientsPath(): string {
    return `${this.apiBasePath()}/clients`;
  }

  public clientPath(id: number): string {
    return `${this.apiBasePath()}/clients/${id}`;
  }

  public clientEditPath(id: number): string {
    return `${this.apiBasePath()}/clients/${id}/edit`;
  }

  public sendReportPath(id: number): string {
    return `${this.apiBasePath()}/clients/${id}/send_report`;
  }

  // tasks
  public tasksPath(): string {
    return `${this.apiBasePath()}/tasks`;
  }

  public taskPath(id: number): string {
    return `${this.apiBasePath()}/tasks/${id}`;
  }

  // projects
  public projectsPath(): string {
    return `${this.apiBasePath()}/projects`;
  }

  public projectPath(id: number): string {
    return `${this.apiBasePath()}/projects/${id}`;
  }

  public projectEditPath(id: number): string {
    return `${this.apiBasePath()}/projects/${id}/edit`;
  }

  // summaries
  public summariesWorkloadPath(): string {
    return `${this.apiBasePath()}/summaries/workload`;
  }

  public summariesLastProjectsPath(): string {
    return `${this.apiBasePath()}/summaries/last_projects`;
  }

  // user
  public getCurrentUserPath(): string {
    return `${this.apiBasePath()}/users/current`;
  }

  public updateBillingProfilePath(): string {
    return `${this.apiBasePath()}/users/update_billing_profile`;
  }

  public setTimezonePath(): string {
    return `${this.apiBasePath()}/users/current/set_timezone`;
  }

  private apiBasePath(): string {
    return 'http://localhost:3000/api';
  }
}

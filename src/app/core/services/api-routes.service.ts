import { Injectable, OnInit, OnDestroy } from '@angular/core';
import { State } from '../../store/index';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs/Subscription';

@Injectable()
export class ApiRoutes implements OnInit, OnDestroy {
  private accountId$: Subscription;
  private accountId: number;

  constructor(private store: Store<State>) {}

  ngOnInit() {
    this.accountId$ = this.store
      .select(state => state.auth.currentUser.id)
      .filter(id => id !== undefined)
      .subscribe(id => {
        this.accountId = id;
      });
  }

  ngOnDestroy() {
    this.accountId$.unsubscribe();
  }

  public timeEntriesPath(): string {
    return `${this.apiBasePath()}/time_entries`;
  }

  public timeEntryPath(id: number): string {
    return `${this.apiBasePath()}/time_entries/${id}`;
  }

  public clientsPath(): string {
    return `${this.apiBasePath()}/clients`;
  }

  public clientPath(id: number): string {
    return `${this.apiBasePath()}/clients/${id}`;
  }

  public tasksPath(): string {
    return `${this.apiBasePath()}/tasks`;
  }

  public taskPath(id: number): string {
    return `${this.apiBasePath()}/tasks/${id}`;
  }

  public projectsPath(): string {
    return `${this.apiBasePath()}/projects`;
  }

  public projectPath(id: number): string {
    return `${this.apiBasePath()}/projects/${id}`;
  }

  private apiBasePath(): string {
    // TODO use enivroment to store api path
    return 'http://localhost:3000/api';
  }
}

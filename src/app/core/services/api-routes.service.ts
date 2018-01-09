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

  public currentTimeEntryPath(): string {
    return `${this.apiBasePath()}/time_entries/current`;
  }

  public clientsPath(): string {
    return `${this.apiBasePath()}/clients`;
  }

  public clientPath(id: number): string {
    return `${this.apiBasePath()}/clients/${id}`;
  }

  public clientEditPath(id: number): string {
    return `${this.apiBasePath()}/clients/${id}/edit`;
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

  public projectEditPath(id: number): string {
    return `${this.apiBasePath()}/projects/${id}/edit`;
  }

  private apiBasePath(): string {
    // TODO use enivroment to store api path
    return 'https://whispering-temple-93009.herokuapp.com/api';
  }
}

import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'timer-projects-top-bar',
  templateUrl: './projects-top-bar.component.html',
  styleUrls: ['./projects-top-bar.component.scss'],
})
export class ProjectsTopBarComponent {
  @Output() search = new EventEmitter<string>();

  onSearch(q: string): void {
    this.search.emit(q);
  }
}

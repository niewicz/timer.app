import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'timer-clients-top-bar',
  templateUrl: './clients-top-bar.component.html',
  styleUrls: ['./clients-top-bar.component.scss'],
})
export class ClientsTopBarComponent {
  @Output() search = new EventEmitter<string>();

  onSearch(q: string): void {
    this.search.emit(q);
  }
}

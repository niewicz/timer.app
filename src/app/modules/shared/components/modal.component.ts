import {
  Component,
  OnInit,
  OnDestroy,
  Output,
  Input,
  EventEmitter,
} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'timer-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit, OnDestroy {
  @Input() isRouted = true;
  @Output() close = new EventEmitter();

  constructor(private router: Router) {}

  ngOnInit() {
    document.querySelector('body').classList.add('no-scroll');
  }

  ngOnDestroy() {
    document.querySelector('body').classList.remove('no-scroll');
  }

  closeModal() {
    if (this.isRouted) {
      this.router.navigate([{ outlets: { modal: null } }], {
        queryParamsHandling: 'merge',
      });
    }

    this.close.emit();
  }
}

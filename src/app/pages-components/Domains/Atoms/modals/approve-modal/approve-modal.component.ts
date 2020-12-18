import { Component, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-approve-modal',
  templateUrl: './approve-modal.component.html',
  styleUrls: ['./approve-modal.component.scss']
})

export class DomainsApproveModalComponent {
  @Input() title: string;
  @Input() primaryButtonTitle: string;
  @Input() dangerButtonTitle: string;

  @Output() primaryButtonFunction: EventEmitter<any> = new EventEmitter();
  @Output() dangerButtonFunction: EventEmitter<any> = new EventEmitter();
  @Output() closeModal: EventEmitter<any> = new EventEmitter();

  handleClick(event) {
    if (!event.target.closest('.approve-modal__form')) {
      this.handleClose();
    }
  }

  handleClose() {
    this.closeModal.emit();
  }
}

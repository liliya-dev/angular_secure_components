import { Component, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-teams-modal',
  templateUrl: './teams-modal.component.html',
  styleUrls: ['./teams-modal.component.scss']
})

export class TeamsModalComponent {
  @Input() title: string;
  @Input() primaryButtonTitle: string;
  @Input() dangerButtonTitle: string;

  @Output() primaryButtonFunction: EventEmitter<any> = new EventEmitter();
  @Output() dangerButtonFunction: EventEmitter<any> = new EventEmitter();
  @Output() closeModal: EventEmitter<any> = new EventEmitter();

  handleClick(event) {
    if (!event.target.closest('.teams-modal')) {
      this.handleClose();
    }
  }

  handleClose() {
    this.closeModal.emit();
  }
}

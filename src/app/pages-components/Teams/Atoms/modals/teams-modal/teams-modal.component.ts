import { Component, EventEmitter, Output, Input, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-teams-modal',
  templateUrl: './teams-modal.component.html',
  styleUrls: ['./teams-modal.component.scss']
})

export class TeamsModalComponent {
  @Input() title: string;
  @Input() primaryButtonTitle: string;
  @Input() dangerButtonTitle: string;

  @ViewChild('modal') modal: ElementRef;

  @Output() primaryButtonFunction: EventEmitter<any> = new EventEmitter();
  @Output() dangerButtonFunction: EventEmitter<any> = new EventEmitter();
  @Output() closeModal: EventEmitter<any> = new EventEmitter();

  handleClick(event) {
    const element = event.target;
    if (element.closest('.teams-modal__form') || element.classList.contains('ng-option') || element.closest('.ng-option')) {
      return
    }
    this.handleClose();
  }

  handleClose() {
    this.closeModal.emit();
  }
}

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-billing-modal',
  templateUrl: './billing-modal.component.html',
  styleUrls: ['./billing-modal.component.scss']
})
export class BillingModalComponent implements OnInit {
  @Input() title: string;
  @Input() text:  string;
  @Input() secondaryButtonTitle: string;
  @Input() dangerButtonTitle: string;
  @Output() close: EventEmitter<any> = new EventEmitter();
  @Output() onSecondaryClick: EventEmitter<any> = new EventEmitter();
  @Output() onDangerClick: EventEmitter<any> = new EventEmitter();

  ngOnInit() {
    
  }
}

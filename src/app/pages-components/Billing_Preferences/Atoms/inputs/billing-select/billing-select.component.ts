import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-billing-select',
  templateUrl: './billing-select.component.html',
  styleUrls: ['./billing-select.component.scss']
})

export class BillingSelectComponent implements OnInit {
  @Input() items: string|number[];
  @Input() initialValue: string;
  @Input() isError: boolean;

  @Output() parentHandler: EventEmitter<any> = new EventEmitter();
  @Output() onInputBlur: EventEmitter<any> = new EventEmitter();
  @Output() onInputFocus: EventEmitter<any> = new EventEmitter();

  onBlur() {
    this.onInputBlur.emit();
  }

  onFocus() {
    this.onInputFocus.emit();
  }

  onSelect(value) {
    this.parentHandler.emit(value);
  }

  selectedItem: string;

  ngOnInit(): void {
    this.selectedItem = this.initialValue;
  }
}

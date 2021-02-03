import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-billing-input',
  templateUrl: './billing-input.component.html',
  styleUrls: ['./billing-input.component.scss']
})

export class BillingInputComponent implements OnInit, OnChanges {
  @Input() id: string;
  @Input() placeholderText: string;
  @Input() initialValue: string;
  @Input() isCvv: boolean;
  @Input() isError: boolean;
  @Output() onInputBlur = new EventEmitter();
  @Output() onInputFocus: EventEmitter<any> = new EventEmitter();
  @Output() onInputPaste: EventEmitter<any> = new EventEmitter();

  onBlur() {
    this.onInputBlur.emit()
  }

  onFocus() {
    this.onInputFocus.emit();
  }

  onPaste(event) {
    event.preventDefault();
    const value = event.clipboardData.getData('text');
    this.onInputPaste.emit(value);
  }

  ngOnChanges(): void {}

  ngOnInit(): void {}
}
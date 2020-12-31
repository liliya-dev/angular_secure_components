import { Component, ViewEncapsulation, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';

interface Data {
  id: string,
  placeholderText: string,
  initialValue: string,
}

@Component({
  selector: 'app-request-text-input',
  templateUrl: './request-text-input.component.html',
  styleUrls: ['./request-text-input.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class RequestTextInputComponent implements OnInit, OnChanges {
  @Input() data: Data;
  @Output() parentHandler: EventEmitter<any> = new EventEmitter();

  inputValue = '';

  setInitialValue() {
    this.inputValue = this.data.initialValue;
  }

  ngOnChanges(): void {
    this.setInitialValue();
  }

  ngOnInit(): void {
    this.setInitialValue();
  }
}

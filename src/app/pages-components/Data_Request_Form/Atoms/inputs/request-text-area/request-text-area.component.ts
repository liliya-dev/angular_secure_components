import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

interface Data {
  id: string,
  placeholderText: string,
  initialValue: string,
}

@Component({
  selector: 'app-request-text-area',
  templateUrl: './request-text-area.component.html',
  styleUrls: ['./request-text-area.component.scss']
})

export class RequestTextAreaComponent implements OnInit {
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

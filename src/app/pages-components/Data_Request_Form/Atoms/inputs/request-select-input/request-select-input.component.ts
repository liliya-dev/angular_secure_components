import { Component, ViewEncapsulation, EventEmitter, Input, OnInit, Output } from '@angular/core';

interface Data {
  id: string,
  initialValue: string,
  values: string[]
}

@Component({
  selector: 'app-request-select-input',
  templateUrl: './request-select-input.component.html',
  styleUrls: ['./request-select-input.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class RequestSelectInputComponent implements OnInit {
  @Input() data: Data;
  @Output() parentHandler: EventEmitter<any> = new EventEmitter();

  selectedItem: string;

  handleChange(event) {
    console.log(event)
  }

  ngOnInit(): void {
    this.selectedItem = this.data.initialValue;
  }
}

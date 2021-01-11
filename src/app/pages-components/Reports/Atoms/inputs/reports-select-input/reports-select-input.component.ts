import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'reports-select-input',
  templateUrl: './reports-select-input.component.html',
  styleUrls: ['./reports-select-input.component.scss']
})

export class ReportsSelectInput implements OnInit {
  @Input() items: string[];
  @Input() initialValue: string;
  @Input() id: string;
  @Input() title: string;
  
  @Output() changeValueParentFunction?: EventEmitter<any> = new EventEmitter();

  selectedItem: string;
  
  handleChange(value) {
    this.changeValueParentFunction.emit([value, this.title]);
  }

  ngOnInit(): void {
    this.selectedItem = this.initialValue;
  }
}

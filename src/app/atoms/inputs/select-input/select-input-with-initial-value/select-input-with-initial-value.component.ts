import { Component, Input, OnInit, Output, ViewEncapsulation, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-select-input-with-initial-value',
  templateUrl: './select-input-with-initial-value.component.html',
  styleUrls: ['./select-input-with-initial-value.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class SelectInputWithInitialValueComponent implements OnInit {
  @Input() items: string[];
  @Output() onItemSelect: EventEmitter<any> = new EventEmitter();

  selectedItem: string;

  handleValueChange(value) {
    this.onItemSelect.emit(value)
  }

  ngOnInit(): void {
    this.selectedItem = this.items[0];
  }
}

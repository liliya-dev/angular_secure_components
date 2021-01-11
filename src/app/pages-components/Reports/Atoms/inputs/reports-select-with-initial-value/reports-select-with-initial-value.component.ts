import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'reports-select-with-initial-value',
  templateUrl: './reports-select-with-initial-value.component.html',
  styleUrls: ['./reports-select-with-initial-value.component.scss']
})

export class ReportsSelectWithInitialValueComponent implements OnInit {
  @Input() items: string[];
  @Input() imagesPaths?: string[]
  @Output() onItemSelect?: EventEmitter<any> = new EventEmitter();

  selectedItem: string;

  handleValueChange(value) {
    this.onItemSelect.emit(value)
  }

  ngOnInit(): void {
    this.selectedItem = this.items[0];
  }
}

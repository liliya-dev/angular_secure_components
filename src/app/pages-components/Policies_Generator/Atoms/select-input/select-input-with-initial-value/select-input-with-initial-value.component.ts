import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-select-input-with-initial-value',
  templateUrl: './select-input-with-initial-value.component.html',
  styleUrls: ['./select-input-with-initial-value.component.scss'],
})

export class PoliciesSelectInputWithInitialValueComponent implements OnInit {
  @Input() items: string[];
  @Input() imagesPaths?: string[]
  @Output() onItemSelect: EventEmitter<any> = new EventEmitter();

  selectedItem: string;

  handleValueChange(value) {
    this.onItemSelect.emit(value)
  }

  ngOnInit(): void {
    this.selectedItem = this.items[0];
  }
}

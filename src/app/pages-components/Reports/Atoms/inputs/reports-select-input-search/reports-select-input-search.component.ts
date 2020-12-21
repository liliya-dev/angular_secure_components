import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'reports-select-input-search',
  templateUrl: './reports-select-input-search.component.html',
  styleUrls: ['./reports-select-input-search.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class ReportsSelectInputSearchComponent {
  @Input() items: string[];
  @Input() placeholderText: string;
  @Input() classes: string;

  selectedItem: string;
  
  onChange(item) {
    this.selectedItem = item;
  }
}

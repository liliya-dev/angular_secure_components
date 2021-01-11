import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-select-input-search',
  templateUrl: './select-input-search.component.html',
  styleUrls: ['./select-input-search.component.scss'],
})

export class SelectInputSearchComponent {
  @Input() items: string[];
  @Input() placeholderText: string;
  @Input() classes: string;

  selectedItem: string;
  
  onChange(item) {
    this.selectedItem = item;
  }
}

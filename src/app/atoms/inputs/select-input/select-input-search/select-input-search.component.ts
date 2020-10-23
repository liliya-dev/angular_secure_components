import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-select-input-search',
  templateUrl: './select-input-search.component.html',
  styleUrls: ['./select-input-search.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SelectInputSearchComponent {

  @Input() items: string[];
  @Input() placeholderText: string;
  @Input() classes: string;

  selectedItem: string;
  
  onChange(ev) {
    this.selectedItem=ev
  }
}

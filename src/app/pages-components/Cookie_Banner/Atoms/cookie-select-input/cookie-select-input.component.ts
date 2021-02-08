import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-cookie-select-input',
  templateUrl: './cookie-select-input.component.html',
  styleUrls: ['./cookie-select-input.component.scss']
})
export class CookieSelectInputComponent implements OnInit {
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

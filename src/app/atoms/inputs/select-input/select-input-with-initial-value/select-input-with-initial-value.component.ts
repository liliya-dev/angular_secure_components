import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-select-input-with-initial-value',
  templateUrl: './select-input-with-initial-value.component.html',
  styleUrls: ['./select-input-with-initial-value.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class SelectInputWithInitialValueComponent implements OnInit {
  @Input() items: string[];

  selectedItem: string;

  ngOnInit(): void {
    this.selectedItem = this.items[0];
  }
}

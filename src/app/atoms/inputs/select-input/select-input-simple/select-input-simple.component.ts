import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-select-input-simple',
  templateUrl: './select-input-simple.component.html',
  styleUrls: ['./select-input-simple.component.scss'],
})

export class SelectInputSimpleComponent implements OnInit {
  @Input() items: string[];
  @Input() initialValue: string;

  selectedItem: string;

  ngOnInit(): void {
    this.selectedItem = this.initialValue;
  }
}

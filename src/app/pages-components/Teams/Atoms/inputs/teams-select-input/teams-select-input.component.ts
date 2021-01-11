import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'teams-select-input',
  templateUrl: './teams-select-input.component.html',
  styleUrls: ['./teams-select-input.component.scss']
})

export class TeamsSelectInput implements OnInit {
  @Input() items: string[];
  @Input() initialValue: string;
  @Input() id: string;
  
  @Output() changeValueParentFunction?: EventEmitter<any> = new EventEmitter();

  selectedItem: string;
  
  handleChange(value) {
    this.changeValueParentFunction.emit(value);
  }

  ngOnInit(): void {
    this.selectedItem = this.initialValue;
  }
}

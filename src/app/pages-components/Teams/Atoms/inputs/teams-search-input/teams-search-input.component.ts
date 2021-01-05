import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-teams-search-input',
  templateUrl: './teams-search-input.component.html',
  styleUrls: ['./teams-search-input.component.scss']
})
export class TeamsSearchInputComponent implements OnInit {
  @Input() placeholderText: string;
  @Input() name?: string = '';
  @Input() initialValue?: string;
  @Input() id?: number = Math.random();

  @Output() changeValueParentFunction?: EventEmitter<any> = new EventEmitter();

  value='';

  handleChangeValue(event) {
   this.changeValueParentFunction.emit(event.target.value);
  }

  ngOnInit() {
    if (this.initialValue) {
      this.value = this.initialValue;
    }
  }
}

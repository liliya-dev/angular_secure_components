import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-teams-input',
  templateUrl: './teams-input.component.html',
  styleUrls: ['teams-input.component.scss'],
})

export class TeamsInputComponent implements OnInit {
  @Input() placeholderText: string;
  @Input() name?: string = '';
  @Input() initialValue?: string;
  @Input() id?: number = Math.random();

  @Output() changeValueParentFunction?: EventEmitter<any> = new EventEmitter();

  classes='';
  value='';

  handleChangeValue(event) {
   this.changeValueParentFunction.emit(event.target.value)
  }

  ngOnInit() {
    if (this.initialValue) {
      this.value = this.initialValue;
    }
  }
}

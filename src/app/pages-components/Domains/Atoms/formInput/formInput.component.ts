import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-form-input',
  templateUrl: './formInput.component.html',
  styleUrls: ['formInput.component.scss'],
})

export class DomainsFormInputComponent implements OnInit {
  @Input() placeholderText: string;
  @Input() name?: string = '';
  @Input() initialValue?: string;
  @Input() isBold?: string;
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

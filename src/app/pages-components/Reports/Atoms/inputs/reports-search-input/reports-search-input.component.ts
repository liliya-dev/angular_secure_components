import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'reports-search-input',
  templateUrl: './reports-search-input.component.html',
  styleUrls: ['./reports-search-input.component.scss']
})
export class ReportsSearchInputComponent implements OnInit {
  @Input() placeholderText: string;
  @Input() title: string;
  @Input() initialValue?: string;
  @Input() id: string;
  @Input() name?: string;

  @Output() changeValueParentFunction?: EventEmitter<any> = new EventEmitter();

  classes='';
  value='';

  handleChangeValue(event) {
   this.changeValueParentFunction.emit([event.target.value, this.title]);
  }

  ngOnInit() {
    if (this.initialValue) {
      this.value = this.initialValue;
    }
  }
}

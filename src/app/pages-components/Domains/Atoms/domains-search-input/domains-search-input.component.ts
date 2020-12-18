import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-domains-search-input',
  templateUrl: './domains-search-input.component.html',
  styleUrls: ['./domains-search-input.component.scss']
})
export class DomainsSearchInputComponent implements OnInit {
  @Input() placeholderText: string;
  @Input() name?: string = '';
  @Input() initialValue?: string;
  @Input() id?: number = Math.random();

  @Output() changeValueParentFunction?: EventEmitter<any> = new EventEmitter();

  classes='';
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

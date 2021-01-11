import { Component, Input, OnChanges, Output, EventEmitter } from '@angular/core';

const ACTIVE_CLASS = 'app-checkbox-input-gradient__container active';
const INACTIVE_CLASS = 'app-checkbox-input-gradient__container';

@Component({
  selector: 'app-checkbox-mutable-gradient',
  templateUrl: './checkbox-mutable-gradient.component.html',
  styleUrls: ['./checkbox-mutable-gradient.component.scss']
})

export class DomainsCheckboxMutableGradientComponent implements OnChanges {
  @Input() onActive: boolean;
  @Input() isChecked: boolean;
  @Input() id: string;

  @Output() handleChange: EventEmitter<any> = new EventEmitter();
  
  classes = '';

  onToggle = () => {
    this.handleChange.emit(this.id)
  }

  ngOnChanges(): void {
    this.classes = this.onActive ? ACTIVE_CLASS : INACTIVE_CLASS;
  }
}

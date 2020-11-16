import { Component, ViewEncapsulation, Input, OnChanges, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-checkbox-mutable-gradient',
  templateUrl: './checkbox-mutable-gradient.component.html',
  styleUrls: ['./checkbox-mutable-gradient.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class CheckboxMutableGradientComponent implements OnChanges {
  @Input() onActive: boolean;
  @Input() isChecked: boolean;
  @Input() id: string;
  @Output() handleChange: EventEmitter<any> = new EventEmitter();
  classes='';

  onToggle = () => {
    this.handleChange.emit(this.id)
  }

  ngOnChanges(): void {
    this.classes = this.onActive ? 'app-checkbox-input-gradient__container active' : 'app-checkbox-input-gradient__container';
  }
}

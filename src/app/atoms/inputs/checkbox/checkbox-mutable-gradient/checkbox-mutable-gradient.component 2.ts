import { Component, ViewEncapsulation, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-checkbox-mutable-gradient',
  templateUrl: './checkbox-mutable-gradient.component.html',
  styleUrls: ['./checkbox-mutable-gradient.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class CheckboxMutableGradientComponent implements OnChanges {
  @Input() onActive: boolean;
  @Input() isChecked: boolean;

  classes='';

  ngOnChanges(): void {
    this.classes = this.onActive ? 'app-checkbox-input-gradient__container active' : 'app-checkbox-input-gradient__container';
  }
}

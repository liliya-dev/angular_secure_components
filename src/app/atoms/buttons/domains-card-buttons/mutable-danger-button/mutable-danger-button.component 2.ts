import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-mutable-danger-button',
  templateUrl: './mutable-danger-button.component.html',
  styleUrls: ['./mutable-danger-button.component.scss']
})

export class MutableDangerButtonComponent implements OnChanges {
  @Input() svgPath: string;
  @Input() onActive: boolean;

  classes = '';

  ngOnChanges(): void {
    this.classes = this.onActive ? 'app-mutable-danger-button active' : 'app-mutable-danger-button';
  }
}

import { Component, Input, OnChanges } from '@angular/core';

const HOVER_COLOR = 'red';
const STATIC_COLOR = 'white';

@Component({
  selector: 'app-mutable-danger-button',
  templateUrl: './mutable-danger-button.component.html',
  styleUrls: ['./mutable-danger-button.component.scss']
})

export class DomainsMutableDangerButtonComponent implements OnChanges {
  @Input() svgPath: string;

  color = STATIC_COLOR;

  changeToActiveColor = () => {
    this.color = HOVER_COLOR;
  }

  changeToStaticColor = () => {
    this.color = STATIC_COLOR;
  }

  ngOnChanges(): void {}
}

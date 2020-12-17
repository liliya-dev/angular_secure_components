import { Component, OnChanges, Input } from '@angular/core';

const STATIC_COLOR = 'rgb(255, 255, 255)';
const HOVER_COLOR = 'url(#paint0_linear)';

@Component({
  selector: 'app-mutable-gradient-icon-button',
  templateUrl: './mutable-gradient-icon-button.component.html',
  styleUrls: ['./mutable-gradient-icon-button.component.scss']
})

export class DomainsMutableGradientIconButtonComponent implements OnChanges {
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

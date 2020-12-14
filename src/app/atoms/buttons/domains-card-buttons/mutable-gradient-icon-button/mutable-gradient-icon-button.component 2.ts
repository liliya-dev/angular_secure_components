import { Component, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'app-mutable-gradient-icon-button',
  templateUrl: './mutable-gradient-icon-button.component.html',
  styleUrls: ['./mutable-gradient-icon-button.component.scss']
})
export class MutableGradientIconButtonComponent implements OnChanges {
  @Input() svgPath: string;
  @Input() onActive: boolean;
  
  color = '';
  staticColor='rgb(1, 25, 73)';
  staticOnActiveColor='rgb(255, 255, 255)';
  hoverColor='url(#paint0_linear)';
  classes = '';

  changeToActiveColor = () => {
    this.color = this.hoverColor;
  }

  changeToStaticColor = () => {
    this.color = this.staticOnActiveColor;
  }

  ngOnChanges(): void {
    this.classes = this.onActive ? 'app-mutable-gradient-icon-button active' : 'app-mutable-gradient-icon-button ';
    this.color = this.onActive ? this.staticOnActiveColor : this.staticColor;
  }
}

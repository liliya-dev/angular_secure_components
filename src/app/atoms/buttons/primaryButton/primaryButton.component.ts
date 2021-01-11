import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-primary-button',
  templateUrl: './primaryButton.component.html',
  styleUrls: ['primaryButton.component.scss'],
})

export class primaryButtonComponent {
  @Input() title: string;
  @Input() backgroundColor: string;
  @Input() svgPath: string;

  fillColor='url(#paint0_linear)';

  changeToLightColor() {  
    this.fillColor = 'url(#paint0_linear)';
  }

  changeToActiveColor() {
    this.fillColor = 'white';
  }
}

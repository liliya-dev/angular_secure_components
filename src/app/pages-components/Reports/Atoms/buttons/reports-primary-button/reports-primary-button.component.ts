import { Component, Input } from '@angular/core';

@Component({
  selector: 'reports-primary-button',
  templateUrl: './reports-primary-button.component.html',
  styleUrls: ['reports-primary-button.component.scss'],
})

export class ReportsPrimaryButtonComponent {
  @Input() svgPath: string;
  @Input() title: string;

  fillColor='url(#paint0_linear)';

  changeToLightColor() {  
    this.fillColor = 'url(#paint0_linear)';
  }

  changeToActiveColor() {
    this.fillColor = 'white';
  }
}

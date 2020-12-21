import { Component, Input } from '@angular/core';

@Component({
  selector: 'reports-secondary-button',
  templateUrl: './reports-secondary-button.component.html',
  styleUrls: ['reports-secondary-button.component.scss'],
})

export class ReportsSecondaryButtonComponent {
  @Input() title: string;
  @Input() srcPath: string;

  fillColor: string =  'rgba(1, 25, 73, 0.5)';

  changeToLightColor() {  
    this.fillColor = 'rgba(1, 25, 73, 0.5)';
  }

  changeToActiveColor() {
    this.fillColor = 'white';
  }
}

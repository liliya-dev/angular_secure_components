import { Component, Input } from '@angular/core';

@Component({
  selector: 'reports-light-button',
  templateUrl: './reports-light-button.component.html',
  styleUrls: ['reports-light-button.component.scss'],
})

export class ReportsLightButtonComponent {
  @Input() srcPath: string;
}

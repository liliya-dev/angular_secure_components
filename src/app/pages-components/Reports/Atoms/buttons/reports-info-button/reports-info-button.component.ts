import { Component, Input } from '@angular/core';

@Component({
  selector: 'reports-info-button',
  templateUrl: './reports-info-button.component.html',
  styleUrls: ['reports-info-button.component.scss'],
})

export class ReportsInfoButtonComponent {
  @Input() title: string;
}

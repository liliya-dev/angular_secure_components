import { Component, Input } from '@angular/core';

@Component({
  selector: 'reports-button',
  templateUrl: './reports-button.component.html',
  styleUrls: ['reports-button.component.scss'],
})

export class ReportsButtonComponent {
  @Input() title: string;
  @Input() classes: string;
}

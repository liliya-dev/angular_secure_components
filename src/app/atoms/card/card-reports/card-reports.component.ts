import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-reports',
  templateUrl: './card-reports.component.html',
  styleUrls: ['./card-reports.component.scss']
})

export class CardReportsComponent {
  @Input() title: string;
  @Input() text: string;
  @Input() iconSrc: string;
  @Input() value: string;
}

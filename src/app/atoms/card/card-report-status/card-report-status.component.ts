import { Component, Input } from '@angular/core';

interface Text {
  text: string,
  value: string
}

@Component({
  selector: 'app-card-report-status',
  templateUrl: './card-report-status.component.html',
  styleUrls: ['./card-report-status.component.scss']
})

export class CardReportStatusComponent {
  @Input() title: string;
  @Input() texts: Text[];
}

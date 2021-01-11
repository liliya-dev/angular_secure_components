import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-semicircle-chart-card',
  templateUrl: './semicircle-chart-card.component.html',
  styleUrls: ['./semicircle-chart-card.component.scss'],
})

export class SemicircleChartCardComponent {
  @Input() title: string;
  @Input() percent: number;
  @Input() text: string;
  @Input() value: number;
}

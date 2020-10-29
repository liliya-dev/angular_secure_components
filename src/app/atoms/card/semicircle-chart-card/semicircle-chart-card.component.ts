import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-semicircle-chart-card',
  templateUrl: './semicircle-chart-card.component.html',
  styleUrls: ['./semicircle-chart-card.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SemicircleChartCardComponent implements OnInit {
  @Input() title: string;
  @Input() percent: number;
  @Input() text: string;
  @Input() value: number;
  constructor() { }

  ngOnInit(): void {
  }

}

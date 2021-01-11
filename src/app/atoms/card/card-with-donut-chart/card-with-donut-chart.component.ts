import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-with-donut-chart',
  templateUrl: './card-with-donut-chart.component.html',
  styleUrls: ['./card-with-donut-chart.component.scss'],
})

export class CardWithDonutChartComponent implements OnInit {
  @Input() title: string;
  @Input() colors?: string[];
  @Input() labels: string[];
  @Input() values: string[];

  activeValue: number;
  defaultColors=['#509AAF', '#7DD8C7', '#645FCE', '#9ED0E0', '#F9BE5A', '#645FCD', "#9ED0E0", "#0263BC", "#24B04B;"];

  data = [{
    type: 'pie',
    values: [],
    labels: [],
    domain: {column: 1},
    hoverinfo: 'none',
    hole: .55,
    automargin: false,
    marker: {
      colors: this.defaultColors,
    }
  }];
  
  layout = {
    margin: {"t": 0, "b": 0, "l": 0, "r": 0},
    annotations: [
      {
        showarrow: false,
        text: '',
      },
    ],
    position: 'absolute',
    height: 150,
    width: 600,
    showlegend: false,
    grid: {rows: 1, columns: 2}
  };

  changeNumberOnChartsClick(data) {
    this.activeValue = data.points[0].value;
  }

  changeNumberOnLegendClick(index: number) {
    this.activeValue=this.data[0].values[index];
  }

  ngOnInit(): void {
    this.data[0].values = this.values;
    this.data[0].labels = this.labels;
    this.activeValue = this.data[0].values[0];
    
    if (this.colors) {
      this.data[0].marker.colors = this.colors;
    }
  }
}

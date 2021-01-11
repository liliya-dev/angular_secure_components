import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-semicircle-chart',
  templateUrl: './semicircle-chart.component.html',
  styleUrls: ['./semicircle-chart.component.scss'],
})

export class SemicircleChartComponent implements OnChanges {
  @Input() percent: number;

  chartOptions = {
    chart: {
      type: "radialBar",
      offsetY: 0
    },
    plotOptions: {
      radialBar: {
        startAngle: -120,
        endAngle: 120,
        track: {
          background: "#D0DAEB",
          strokeWidth: "97%",
        },
      }
    },
    states: {
      normal: {
        filter: {
          type: 'none',
        }
      },
      hover: {
        filter: {
          type: 'none',
        }
      },
      active: {
        allowMultipleDataPointsSelection: false,
        filter: {
          type: 'none',
        }
      },
    },
    fill: {
      type: "gradient",
      gradient: {
        type: "diagonal2",
        shadeIntensity: 1,
        opacityFrom: 0.7,
        opacityTo: 0.9,
        colorStops: [
          {
            offset: 0,
            color: '',
            opacity: 1
          },
          {
            offset: 50,
            color: '',
            opacity: 1
          },
          {
            offset: 100,
            color: '',
            opacity: 1
          }
        ]
      }
    }
  }

  ngOnChanges () {
    if (this.percent < 30) {
      this.chartOptions.fill.gradient.colorStops.forEach(colorStop => colorStop.color = "#EA2D2D");
    } else if (this.percent < 65) {
      this.chartOptions.fill.gradient.colorStops[0].color = "#F9BE5A";
      this.chartOptions.fill.gradient.colorStops[1].color = "#F9BE5A";
      this.chartOptions.fill.gradient.colorStops[2].color = "#FB5F47";
    } else {
      this.chartOptions.fill.gradient.colorStops[0].color = "#0263BC";
      this.chartOptions.fill.gradient.colorStops[1].color = "#24B04B";
      this.chartOptions.fill.gradient.colorStops[2].color = "#24B04B";
    }
  }
}

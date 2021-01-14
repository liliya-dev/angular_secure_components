import { Component, Input, OnChanges, OnInit } from '@angular/core';

const BORDER_COLOR = 'rgba(1, 25, 73, 0.1)';
const MARKER_COLOR = 'rgb(1, 25, 73)';
const AXIS_LABEL_COLOR = 'rgba(1, 25, 73, 0.3)';
const LEGEND_LABEL_COLOR = 'rgba(1, 25, 73, 0.75)';

@Component({
  selector: 'app-linear-chart',
  templateUrl: './linear-chart.component.html',
  styleUrls: ['./linear-chart.component.scss'],
})

export class LinearChartComponent  implements OnChanges, OnInit{
  @Input() series: string[];
  @Input() categories: string[];
  @Input() colors: string[];
  @Input() maxValue: number;
  @Input() date: string;

  chartOptions = {
    title: {
      text: '',
      style: { fontSize:  '0px' },
    },
    tooltip: {
      shared: false,
      custom: function({ series, dataPointIndex, seriesIndex, w }) {
        const total = w.globals.seriesTotals[seriesIndex];
        const texts = [
          { text: 'totlal', value: `${Math.round(series[0][dataPointIndex] * 100 / total)} %`},
          { text: 'consent', value: series[0][dataPointIndex] + series[1][dataPointIndex] },
          { text: 'opt-in', value: series[0][dataPointIndex] },
          { text: 'opt-out', value: series[1][dataPointIndex] },
        ]
        const liClass = 'card-report-status__item';
        const spanClass = 'card-report-status__value';
        return (
          `<div class="card-report-status">
            <p class="card-report-status__title">${w.config.title.text}</p>
            <ul class="card-report-status__list">
              <li class=${liClass}><span class=${spanClass}>${texts[0].value}</span> ${texts[0].text}</li>
              <li class=${liClass}><span class=${spanClass}>${texts[1].value}</span> ${texts[1].text}</li>
              <li class=${liClass}><span class=${spanClass}>${texts[2].value}</span> ${texts[2].text}</li>
              <li class=${liClass}><span class=${spanClass}>${texts[3].value}</span> ${texts[3].text}</li>
            </ul>
          </div>`
        );
      }
    },
    chart: {
      height: 350,
      type: "line",
      toolbar: { show: false },
    },
    dataLabels: { enabled: false },
    stroke: {
      curve: "smooth",
      width: 1.45,
    },
    grid: {
      borderColor: BORDER_COLOR,
      position: 'back',
      xaxis: { lines: { show: true }},
      yaxis: { lines: { show: true }},
    },
    markers: {
      size: 0,
      colors: MARKER_COLOR,
      shape: "circle",
      hover: {
        size: 8,
      }
    },
    xaxis: {
      categories: [],
      crosshairs: { show: false },
      tooltip: { enabled: false },
      labels: {
        style: {
          colors: AXIS_LABEL_COLOR,
          fontSize: "14px",
          fontFamily: "'Gramatica Bold', 'open-sans'"
        }
      }
    },
    yaxis: {
      min: 0,
      max: 0,
      tickAmount: 4,
      labels: {
        style: {
          colors: [AXIS_LABEL_COLOR],
          fontSize: "14px",
          fontFamily: "'Gramatica Bold', 'open-sans'"
        }
      }
    },
    legend: {
      show: true,
      position: 'top',
      horizontalAlign: 'left', 
      fontSize: '12px',
      fontFamily: "'Gramatica Bold', 'open-sans'",
      labels: { colors: LEGEND_LABEL_COLOR },
      onItemClick: { toggleDataSeries: false },
      onItemHover: { highlightDataSeries: true },
    }
  };

  updateChartOption = () => {
    this.chartOptions.xaxis.categories = this.categories;
    this.chartOptions.yaxis.max = this.maxValue;
    this.chartOptions.title.text = this.date;
  }

  ngOnChanges() {
   this.updateChartOption();
  }

  ngOnInit() {
    this.updateChartOption();
  }
}

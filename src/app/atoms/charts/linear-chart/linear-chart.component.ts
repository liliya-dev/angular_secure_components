import { Component, Input, OnChanges, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-linear-chart',
  templateUrl: './linear-chart.component.html',
  styleUrls: ['./linear-chart.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class LinearChartComponent  implements OnChanges, OnInit{
  @Input() series: string[];
  @Input() colors: string[];

  chartOptions = {
    tooltip: {
      custom: function({ series, seriesIndex, dataPointIndex, w }) {
        const max = 8000;
        const title = '12 aug 2020';
        const texts = [
          { text: 'totlal', value: `${Math.round(series[0][dataPointIndex] * 100 / max)} %`},
          { text: 'consent', value: series[0][dataPointIndex] + series[1][dataPointIndex] },
          { text: 'opt-in', value: series[0][dataPointIndex] },
          { text: 'opt-out', value: series[1][dataPointIndex] },
        ]
        return (
          `<div class="card-report-status">
          <p class="card-report-status__title fs-18-gramm-light">
            ${title}
          </p>
          <ul class="card-report-status__list">
            <li
              class="card-report-status__item fs-14-sofia-normal"
            >
              <span class="card-report-status__value fs-14-sofia-800">${texts[0].value}</span>
              ${texts[0].text}
            </li>
            <li
              class="card-report-status__item fs-14-sofia-normal"
            >
              <span class="card-report-status__value fs-14-sofia-800">${texts[1].value}</span>
              ${texts[1].text}
            </li><li
            class="card-report-status__item fs-14-sofia-normal"
            >
              <span class="card-report-status__value fs-14-sofia-800">${texts[2].value}</span>
              ${texts[2].text}
            </li>
            <li
              class="card-report-status__item fs-14-sofia-normal"
            >
              <span class="card-report-status__value fs-14-sofia-800">${texts[3].value}</span>
              ${texts[3].text}
            </li>
          </ul>
          </div>`
        );
      }
    },
    chart: {
      height: 350,
      type: "line",
      dropShadow: {
        enabled: true,
        color: "#000",
        top: 18,
        left: 7,
        blur: 10,
        opacity: 0.2
      },
      toolbar: {
        show: false
      },
      
    },
    colors: ["#3C814F", "#B01515"],
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: "smooth",
      width: 1.45,
    },
    title: {
      text: "",
      align: "left"
    },
    grid: {
      borderColor: "rgba(1, 25, 73, 0.1)",
      position: 'back',
      xaxis: {
        lines: {
          show: true,
        }
      },
      yaxis: {
        lines: {
          show: true,
        }
      },
    },
    markers: {
      size: 0,
      colors: "rgb(1, 25, 73)",
      strokeColors: '#fff',
      strokeWidth: 2,
      strokeOpacity: 0.9,
      strokeDashArray: 0,
      fillOpacity: 1,
      discrete: [],
      shape: "circle",
      onClick: undefined,
      onDblClick: undefined,
      showNullDataPoints: false,
      hover: {
        size: 8,
      }
    },
    xaxis: {
      categories: ["JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC", "JAN", "FEB", "MAR"],
      title: {
        text: ""
      },
      crosshairs: {
        show: false,     
      },
      tooltip: {
        enabled: false,
      },
      labels: {
        style: {
          colors: "rgba(1, 25, 73, 0.3)",
          fontSize: "14px",
          fontFamily: "'Gramatica Bold', 'open-sans'"
        }
      }
    },
    yaxis: {
      title: {
        text: ""
      },
      min: 0,
      max: 8000,
      tickAmount: 4,
      labels: {
        style: {
          colors: ["rgba(1, 25, 73, 0.3)"],
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
      fontWeight: 400,
      formatter: function (val) {
        return ' ' + val
      },
      tooltipHoverFormatter: undefined,
      offsetX: 0,
      offsetY: 0,
      labels: {
          colors: "rgba(1, 25, 73, 0.75)",
          useSeriesColors: false
      },
      markers: {
          width: '24px',
          height: '24px',
          radius: '4px',
          offsetX: 0,
          offsetY: 0
      },
      itemMargin: {
          horizontal: 0,
          vertical: 10
      },
      onItemClick: {
          toggleDataSeries: false
      },
      onItemHover: {
          highlightDataSeries: true
      },
  }
  };

  ngOnChanges() {

  }

  ngOnInit() {
  }
}

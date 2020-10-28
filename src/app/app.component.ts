import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})


export class AppComponent {


  chartOptions = {
    series: [100],
    chart: {
      type: "radialBar",
      offsetY: -20
    },
    plotOptions: {
      radialBar: {
        startAngle: -120,
        endAngle: 120,
        track: {
          background: "transparent",
          strokeWidth: "97%",
          margin: 5,
          dropShadow: {
            enabled: true,
            top: 2,
            left: 0,
            opacity: 0.31,
            blur: 20
          }
        },
        dataLabels: {
          name: {
            show: true
          },
          value: {
            offsetY: -2,
            fontSize: "22px"
          }
        }
      }
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
            color: "#0263BC",
            opacity: 1
          },
          {
            offset: 50,
            color: "#24B04B",
            opacity: 1
          },
          {
            offset: 100,
            color: "#24B04B",
            opacity: 1
          }
        ]
      }
    },
    labels: ["Average Results"]
  };
    
  per=10;

  func(ev: any) {
    console.log(ev.event.target.style)
    ev.event.target.style.strokeWidth = "20"
    ev.event.target.style.stroke = "white"
    this.num = ev.points[0].value
  }


  num=6;
  title='mkl'
   data = [{
    values: [16, 15, 12, 6, 5, 4, 42],
    labels: ['US', 'China', 'European Union', 'Russian Federation', 'Brazil', 'India', 'Rest of World' ],
    domain: {column: 1},
    name: 'GHG Emissions',
    hoverinfo: 'label+value',
    hole: .7,
    automargin: true,
    type: 'pie'
  }];
  
  layout = {
    title: '',
    margin: {"t": 20, "b": 10, "l": 0, "r": 0},
    annotations: [
      {
        font: {
          size: 20
        },
        showarrow: false,
        text: this.num,
        x: 0.17,
        y: 0.5
      },
    ],
    height: 400,
    width: 600,
    showlegend: false,
    grid: {rows: 1, columns: 2}
  };
  
}

import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})


export class AppComponent implements OnInit {
  @Input() v: string;
  title="Cookies by category"

  activeValue=16;
  changeNumberOnCharts(data) {
    console.log(data)
    this.activeValue = data.points[0].value;
  }

  han(i) {
    this.activeValue=this.data[0].values[i];
  }

  num=6;
  color='red'
   data = [{
    values: [12, 6, 5, 4, 9, 2, 7],
    labels: ['European ', '20 local storage objects', 'Brazil', 'India', 'Rest of ', 'hjsbb', 'kk' ],
    domain: {column: 1},
    name: 'GHG Emissions',
    hoverinfo: 'none',
    hole: .55,
    automargin: false,
    type: 'pie',
    marker: {
      colors: ['#509AAF', '#7DD8C7', '#645FCE', '#9ED0E0', '#F9BE5A', '#645FCD', "#9ED0E0", "#0263BC", "#24B04B;"],
      line: {
        width: 10,
      }
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
    height: 400,
    width: 600,
    showlegend: false,
    grid: {rows: 1, columns: 2}
  };

  ngOnInit() {

  }
}

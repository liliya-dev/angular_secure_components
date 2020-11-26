import { Component, ComponentFactoryResolver, Input, OnInit, ViewChild, ViewContainerRef, ViewEncapsulation } from '@angular/core';
import { DynamicTableComponent } from './atoms/tables/dynamic-table/dynamic-table.component';
import { DynamicListComponent } from './atoms/tables/dynamic-list/dynamic-list.component';
import Chart from 'chart.js';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})


export class AppComponent  {
  isVisibleButtonsBlock = false;
title=""
myChart
createChart() {
  const canvas = document.getElementById('myChart') as HTMLCanvasElement;
  const ctx = canvas.getContext('2d');

this.myChart = new Chart(ctx, {
  type: 'bar',
  data: {
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [{
          label: '# of Votes',
          data: [12, 19, 3, 5, 2, 3],
          backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
      }]
  },
  options: {
      scales: {
          yAxes: [{
              ticks: {
                  beginAtZero: true
              }
          }]
      }
  }
});

console.log(this.myChart)

}
constructor() { }

ngOnInit(): void {
  this.createChart()
}




 
}

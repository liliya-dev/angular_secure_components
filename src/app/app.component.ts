import { Component, ComponentFactoryResolver, Input, OnInit, ViewChild, ViewContainerRef, ViewEncapsulation } from '@angular/core';
import Chart from 'chart.js';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class AppComponent  {
  title=""
}

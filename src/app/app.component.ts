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
  title=""
}

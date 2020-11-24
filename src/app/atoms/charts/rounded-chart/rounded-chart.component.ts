import { Component, ViewEncapsulation, ViewChild, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { Inject, NgZone, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';
import * as am4maps from "@amcharts/amcharts4/maps";
import am4geodata_worldLow from "@amcharts/amcharts4-geodata/worldLow";


@Component({
  selector: 'app-rounded-chart',
  templateUrl: './rounded-chart.component.html',
  styleUrls: ['./rounded-chart.component.scss']
})
export class RoundedChartComponent implements OnInit {
  chart = am4core.create("chartdiv", am4maps.MapChart)
  polygonSeries;
  polygonTemplate

  createChart() {  
    this.chart.geodata = am4geodata_worldLow;
    this.chart.projection = new am4maps.projections.NaturalEarth1();
    this.polygonSeries = this.chart.series.push(new am4maps.MapPolygonSeries());
    this.polygonSeries.mapPolygons.template.strokeWidth = 0.5;
    this.polygonSeries.useGeodata = true;
    this.polygonTemplate = this.polygonSeries.mapPolygons.template;
    this.polygonTemplate.tooltipText = "{name}";
    this.polygonTemplate.fill = this.chart.colors.getIndex(0);
    this.chart.series.push(new am4maps.GraticuleSeries());

    var hs = this.polygonTemplate.states.create("hover");
    hs.properties.fill = this.chart.colors.getIndex(2);

    var activeState = this.polygonTemplate.states.create("active");

    activeState.properties.fill = this.chart.colors.getIndex(4);

    
        var graticuleSeries = this.chart.series.push(new am4maps.GraticuleSeries());
    this.polygonTemplate.events.on("hit", function(ev) {
      console.log(ev)
      ev.target.isActive = !ev.target.isActive;
      console.log(activeState, graticuleSeries)
    })
  }

  ngOnInit() {
    this.createChart()
  }
}

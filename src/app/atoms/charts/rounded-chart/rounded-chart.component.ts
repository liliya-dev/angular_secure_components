import { Component, OnChanges, OnInit } from '@angular/core';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4maps from "@amcharts/amcharts4/maps";
import am4geodata_worldLow from "@amcharts/amcharts4-geodata/worldLow";
import { chart } from 'highcharts';

const Europe = ["AUT"]
let active = {};
@Component({
  selector: 'app-rounded-chart',
  templateUrl: './rounded-chart.component.html',
  styleUrls: ['./rounded-chart.component.scss']
})


export class RoundedChartComponent implements OnInit, OnChanges {
  activeCountry = 1
  chart = am4core.create("chartdiv", am4maps.MapChart)
  polygonSeries;
  polygonTemplate
  lo= 0

  static show () {
    console.log(this)
  }


  createChart() {  
    this.chart.geodata = am4geodata_worldLow;
    this.chart.projection = new am4maps.projections.Miller();
    this.polygonSeries = this.chart.series.push(new am4maps.MapPolygonSeries());
    this.polygonSeries.useGeodata = true;
    this.polygonTemplate = this.polygonSeries.mapPolygons.template;
    this.polygonTemplate.tooltipText = "{name}";
    this.polygonTemplate.fill = am4core.color("rgba(1, 25, 73, 0.2)")

    var hs = this.polygonTemplate.states.create("hover");
    hs.properties.fill = am4core.color("rgb(22, 97, 60)");
    this.polygonSeries.exclude = ["AQ"]

    this.polygonSeries.data = [{
      "id": "US",
      "name": "United States",
      "value": 100,
      "fill": am4core.color("rgba(1, 25, 73, 0.75)")
    }, {
      "id": "FR",
      "name": "France",
      "value": 50,
      "fill": am4core.color("rgba(1, 25, 73, 0.75)")
    }];

    this.polygonTemplate.propertyFields.fill = "fill";
    this.polygonTemplate.events.on("hit", function(ev) {
      var data = ev.target.dataItem.dataContext;
      console.log(ev.target.uid, data)
      ev.target.isActive = !ev.target.isActive;
    })
    const setActive = (value) => {
      this.activeCountry = value;
      console.log(this.activeCountry)
    }
     this.polygonTemplate.events.on("over", function(ev) {
      const active = ev.target.dataItem.dataContext;
      setActive(active.id)
    })
  }

  changeMap = () => {
    this.chart = null
    this.chart = am4core.create("chartdiv", am4maps.MapChart)
    this.chart.geodata = am4geodata_worldLow;
    this.chart.projection = new am4maps.projections.Miller();
    this.polygonSeries = this.chart.series.push(new am4maps.MapPolygonSeries());
    this.polygonSeries.useGeodata = true;
    this.polygonTemplate = this.polygonSeries.mapPolygons.template;
    this.polygonTemplate.tooltipText = "{name}";
    this.polygonTemplate.fill = am4core.color("rgba(1, 25, 73, 0.2)")

    var hs = this.polygonTemplate.states.create("hover");
    hs.properties.fill = am4core.color("rgb(22, 97, 60)");
    this.polygonSeries.include = ["PT", "ES", "FR", "DE", "BE", "NL", "IT", "AT", "GB", "IE", "CH", "LU", "PL", "MD", 
    "SK", "SI", "UA", "CZ", "BG", "RO", "ME", "HR", "BA", "HU"];

    this.polygonSeries.data = [{
      "id": "US",
      "name": "United States",
      "value": 100,
      "fill": am4core.color("rgba(1, 25, 73, 0.75)")
    }, {
      "id": "FR",
      "name": "France",
      "value": 50,
      "fill": am4core.color("rgba(1, 25, 73, 0.75)")
    },{
      "id": "PL",
      "name": "Poland",
      "value": 50,
      "fill": am4core.color("rgba(1, 25, 73, 0.75)")
    }];

    this.polygonTemplate.propertyFields.fill = "fill";

    this.polygonTemplate.events.on("hit", function(ev) {
      console.log(ev.target.uid)
      ev.target.isActive = !ev.target.isActive;
    })

    this.polygonTemplate.events.on("over", function(ev) {
      console.log(7)
    })
  }

  ngOnChanges() {
    this.createChart()
  }

  ngOnInit() {
    this.createChart()
  }
}

import { Component, Input, OnChanges, OnInit } from '@angular/core';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4maps from "@amcharts/amcharts4/maps";
import am4geodata_worldLow from "@amcharts/amcharts4-geodata/worldLow";
import { 
  AfricaCodes, AustraliaCodes, NorthAmericaCodes, SouthAmericaCodes, EuropeCodes, AsiaCodes 
} from './countriesCodes';

interface Countries {
  europe: { id: string, value: number, name: string }[],
  northAmerica: { id: string, value: number, name: string }[],
  southAmerica: { id: string, value: number, name: string }[],
  asia: { id: string, value: number, name: string }[],
  australia: { id: string, value: number, name: string }[],
  africa: { id: string, value: number, name: string }[]
}

@Component({
  selector: 'app-rounded-chart',
  templateUrl: './rounded-chart.component.html',
  styleUrls: ['./rounded-chart.component.scss']
})

export class RoundedChartComponent implements OnInit, OnChanges {
  @Input() countriesData: Countries;
  activeCountry = '';
  chart;
  polygonSeries;
  polygonTemplate
  allCountriesData = [];
  isTipVisible = false;
  tipsTop = 0;
  tipsLeft = 0;
  tipsData = [];

  createChart(region: string) {  
    this.chart = null
    this.chart = am4core.create("chartdiv", am4maps.MapChart)
    this.chart.geodata = am4geodata_worldLow;
    this.chart.projection = new am4maps.projections.Miller();
    this.polygonSeries = this.chart.series.push(new am4maps.MapPolygonSeries());
    this.polygonSeries.useGeodata = true;
    this.polygonTemplate = this.polygonSeries.mapPolygons.template;
    this.polygonTemplate.tooltipText = "";
    this.polygonTemplate.fill = am4core.color("rgba(1, 25, 73, 0.2)")

    var hs = this.polygonTemplate.states.create("hover");
    hs.properties.fill = am4core.color("rgb(22, 97, 60)");

    switch(region) {
      case 'World': 
      this.polygonSeries.exclude = ["AQ"]
      this.polygonSeries.data = [...this.allCountriesData];
      this.tipsData = [...this.allCountriesData];
      break;
      case 'Europe': 
      this.polygonSeries.include = [...EuropeCodes];
      this.polygonSeries.data = [...this.countriesData.europe];
      this.tipsData = [...this.countriesData.europe];
      break;
      case 'Asia': 
      this.polygonSeries.include = [...AsiaCodes];
      this.polygonSeries.data = [...this.countriesData.asia];
      this.tipsData = [...this.countriesData.asia];
      break;
      case 'North America': 
      this.polygonSeries.include = [...NorthAmericaCodes];
      this.polygonSeries.data = [...this.countriesData.northAmerica];
      this.tipsData = [...this.countriesData.northAmerica];
      break;
      case 'South America': 
      this.polygonSeries.include = [...SouthAmericaCodes];
      this.polygonSeries.data = [...this.countriesData.southAmerica];
      this.tipsData = [...this.countriesData.southAmerica];
      break;
      case 'Australia': 
      this.polygonSeries.include = [...AustraliaCodes];
      this.polygonSeries.data = [...this.countriesData.australia];
      this.tipsData = [...this.countriesData.australia];
      break;
      case 'Africa': 
      this.polygonSeries.include = [...AfricaCodes];
      this.polygonSeries.data = [...this.countriesData.africa];
      this.tipsData = [...this.countriesData.africa];
      break;
    }

    this.polygonSeries.data.forEach(element => {
      element.fill = am4core.color("rgba(1, 25, 73, 0.75)");
    });

    this.polygonTemplate.propertyFields.fill = "fill";
    this.polygonTemplate.events.on("hit", function(ev) {
      var data = ev.target.dataItem.dataContext;
      console.log(ev.target.uid, data)
      ev.target.isActive = !ev.target.isActive;
    })

    const setActive = (value, top, left) => {
      const isCountryIncludedToTheList = this.allCountriesData.findIndex(country => country.id === value);
      if(isCountryIncludedToTheList !== -1) {
        this.activeCountry = value;
        this.isTipVisible = true;
        this.tipsTop = top - 24 - (16 * this.tipsData.length + 8 * (this.tipsData.length + 1)) - 10;
        this.tipsLeft = left - 110;
      }
    }

    const setIsTipsVisible = (value) => {
      this.isTipVisible = value;
    }

     this.polygonTemplate.events.on("over", function(ev) {
      const active = ev.target.dataItem.dataContext;
      setActive(active.id, ev.event.pageY,ev.event.pageX)
    })

    this.polygonTemplate.events.on("out", function(ev) {
      setIsTipsVisible(false)

    })
  }

  ngOnChanges() {
    // this.createChart()
  }

  ngOnInit() {
    let formattedCountriesData =[]
    Object.values(this.countriesData).forEach(region => { formattedCountriesData = [...formattedCountriesData,...region]})
    this.allCountriesData = formattedCountriesData
    this.createChart('World')
  }
}

import { AfterViewInit, Component, ElementRef, HostListener, Input, OnChanges, OnInit, ViewChild } from '@angular/core';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4maps from "@amcharts/amcharts4/maps";
import am4geodata_worldLow from "@amcharts/amcharts4-geodata/worldLow";
import { 
  AfricaCodes, AustraliaCodes, NorthAmericaCodes, SouthAmericaCodes, EuropeCodes, AsiaCodes 
} from './countriesCodes';

interface Country {
  id: string, 
  value: number, 
  name: string 
}

interface Countries {
  europe: Country[],
  northAmerica: Country[],
  southAmerica: Country[],
  asia: Country[],
  australia: Country[],
  africa: Country[]
}

const MAP_COLOR = "rgba(1, 25, 73, 0.2)";
const COUNTRY_HOVER_COLOR = "rgb(22, 97, 60)";
const SELECTED_COUNTRY_COLOR = "rgba(1, 25, 73, 0.75)";

@Component({
  selector: 'app-map-chart',
  templateUrl: './map-chart.component.html',
  styleUrls: ['./map-chart.component.scss']
})

export class MapChartComponent implements OnInit, OnChanges, AfterViewInit {
  @Input() countriesData: Countries;

  chart;
  polygonSeries;
  polygonTemplate;
  activeCountry: string = '';
  allCountriesData: Country[] = [];
  isTipVisible: boolean = false;
  tipsTop: number = 0;
  tipsLeft: number = 0;
  tipsData: Country[] = [];
  mapHeight: number;

  @ViewChild('mapChart') map: ElementRef;
  
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    const height = this.map.nativeElement.clientWidth * 0.7;
    this.mapHeight = height > 500 ? 500 : height;
  }

  createChart(region: string) {  
    this.chart = null
    this.chart = am4core.create("chartdiv", am4maps.MapChart)
    this.chart.geodata = am4geodata_worldLow;
    this.chart.projection = new am4maps.projections.Miller();
    this.polygonSeries = this.chart.series.push(new am4maps.MapPolygonSeries());
    this.polygonSeries.useGeodata = true;
    this.polygonTemplate = this.polygonSeries.mapPolygons.template;
    this.polygonTemplate.tooltipText = "";
    this.polygonTemplate.fill = am4core.color(MAP_COLOR)
    const hs = this.polygonTemplate.states.create("hover");
    hs.properties.fill = am4core.color(COUNTRY_HOVER_COLOR);

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
        this.chart.deltaLongitude = -120;
        this.chart.homeZoomLevel = 1.3;
      break;
      case 'Asia': 
        this.polygonSeries.include = [...AsiaCodes];
        this.polygonSeries.data = [...this.countriesData.asia];
        this.tipsData = [...this.countriesData.asia];
        this.chart.deltaLongitude = -130;
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
        this.chart.deltaLongitude = -160;
        this.chart.homeZoomLevel = 2;
      break;
      case 'Africa': 
        this.polygonSeries.include = [...AfricaCodes];
        this.polygonSeries.data = [...this.countriesData.africa];
        this.tipsData = [...this.countriesData.africa];
      break;
    }

    this.polygonSeries.data.forEach(element => element.fill = am4core.color(SELECTED_COUNTRY_COLOR));
    this.polygonTemplate.propertyFields.fill = "fill";
 
    const setActive = (value, top, left) => {
      const isCountryIncludedToTheList = this.allCountriesData.findIndex(country => country.id === value);
      if (isCountryIncludedToTheList !== -1) {
        this.activeCountry = value;
        this.isTipVisible = true;
        this.tipsTop = top - 24 - (16 * this.tipsData.length + 8 * (this.tipsData.length + 1)) - 20;
        if (left - 110 > 0) {
          if (left + 110 > this.map.nativeElement.clientWidth) {
            this.tipsLeft = this.map.nativeElement.clientWidth - 220;
          } else {
            this.tipsLeft = left - 110;
          }
        } else {
          this.tipsLeft = 0;
        }
      }
    }

    const setIsTipsVisible = (value) => {
      this.isTipVisible = value;
    }

    this.polygonTemplate.events.on("over", function(ev) {
      const active = ev.target.dataItem.dataContext;
      setActive(active.id, ev.event.pageY,ev.event.pageX);
    })

    this.polygonTemplate.events.on("out", function(ev) {
      setIsTipsVisible(false);
    })
  }

  ngAfterViewInit() {
    const height = this.map.nativeElement.clientWidth * 0.7;
    this.mapHeight = height > 500 ? 500 : height;
  }

  ngOnChanges() {
    this.createChart('World');
  }

  ngOnInit() {
    let formattedCountriesData = [];
    Object.values(this.countriesData).forEach(region => { 
      formattedCountriesData = [...formattedCountriesData,...region]
    })
    this.allCountriesData = formattedCountriesData;
    this.createChart('World');
  }
}

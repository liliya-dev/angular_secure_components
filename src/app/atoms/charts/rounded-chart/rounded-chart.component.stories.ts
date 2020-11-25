import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { RoundedChartComponent } from './rounded-chart.component';
import { NgApexchartsModule } from "ng-apexcharts";
import { CardReportStatusComponent } from '../../card/card-report-status/card-report-status.component';
import { SelectInputWithInitialValueComponent } from '../../inputs/select-input/select-input-with-initial-value/select-input-with-initial-value.component';
import { Component, Inject, NgZone, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

// amCharts imports
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';
import { NgSelectModule } from '@ng-select/ng-select';


const props = {
  percent: { control: 'array' },
};

export default {
  title: 'Atoms/Charts',
  decorators: [
    moduleMetadata({
      declarations: [
        RoundedChartComponent,
        CardReportStatusComponent,
        SelectInputWithInitialValueComponent
      ],
      providers: [],
      imports: [NgApexchartsModule, NgSelectModule],
    }),
  ],
  argTypes: props,
} as Meta;


const Template: Story<RoundedChartComponent> = (args: RoundedChartComponent) => ({
  component: RoundedChartComponent,
  props: args,
});

export const Map = Template.bind({});
Map.args = {
  countriesData: {
    europe: [{ id: "UA", name: "Ukraine", value: 900 }, { id: "PL", name: "Poland", value: 700 }, { id: "FR", name: "France", value: 1230 }],
    northAmerica: [{ id: "US", name: "USA", value: 200 }],
    southAmerica: [{ id: "BR", name: "Brasil", value: 960 }],
    asia: [],
    australia: [{ id: "AU", name: "Australia", value: 764 }],
    africa: [],
  }
};

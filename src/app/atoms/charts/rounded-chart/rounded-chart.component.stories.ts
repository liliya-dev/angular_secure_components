import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { RoundedChartComponent } from './rounded-chart.component';
import { NgApexchartsModule } from "ng-apexcharts";
import { CardReportStatusComponent } from '../../card/card-report-status/card-report-status.component';
import { Component, Inject, NgZone, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

// amCharts imports
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';


const props = {
  percent: { control: 'array' },
};

export default {
  title: 'Atoms/Charts',
  decorators: [
    moduleMetadata({
      declarations: [
        RoundedChartComponent,
        CardReportStatusComponent
      ],
      providers: [],
      imports: [NgApexchartsModule],
    }),
  ],
  argTypes: props,
} as Meta;


const Template: Story<RoundedChartComponent> = (args: RoundedChartComponent) => ({
  component: RoundedChartComponent,
  props: args,
});

export const Rounded = Template.bind({});
Rounded.args = {
 
};

import { CommonModule } from '@angular/common';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { CardRowComponent } from './card-row.component';
import { SemicircleChartComponent } from '../../atoms/semicircle-chart/semicircle-chart.component';
import { NgApexchartsModule } from "ng-apexcharts";
import { CardWithCenterTextComponent } from '../../atoms/card/card-with-center-text/card-with-center-text.component';
import { SemicircleChartCardComponent } from '../../atoms/card/semicircle-chart-card/semicircle-chart-card.component';
import { CardWithDonutChartComponent } from '../../atoms/card/card-with-donut-chart/card-with-donut-chart.component';
import * as PlotlyJS from 'plotly.js/dist/plotly.js';
import { PlotlyModule } from 'angular-plotly.js';

PlotlyModule.plotlyjs = PlotlyJS;

const props = {};

export default {
  title: 'Molecules/Card Row',
  decorators: [
    moduleMetadata({
      declarations: [
        CardRowComponent, 
        CardWithDonutChartComponent, 
        SemicircleChartCardComponent,
        SemicircleChartComponent,
        CardWithCenterTextComponent
      ],
      imports: [CommonModule, PlotlyModule, NgApexchartsModule],
    }),
  ],
  argTypes: props,
} as Meta;

const Template: Story<CardRowComponent> = (args: CardRowComponent) => ({
  component: CardRowComponent,
  props: args,
});

export const Row = Template.bind({});
Row.args = {};
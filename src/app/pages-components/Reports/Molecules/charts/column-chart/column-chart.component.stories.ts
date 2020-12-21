import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { ColumnChartComponent } from './column-chart.component';
import { NgApexchartsModule } from "ng-apexcharts";
import { ChartModule } from 'angular2-chartjs';

const props = {};

export default {
  title: 'Reports/Molecules/Charts',
  decorators: [
    moduleMetadata({
      declarations: [
        ColumnChartComponent,
      ],
      imports: [NgApexchartsModule, ChartModule],
    }),
  ],
  argTypes: props,
} as Meta;

const Template: Story<ColumnChartComponent> = (args: ColumnChartComponent) => ({
  component: ColumnChartComponent,
  props: args,
});

export const Column = Template.bind({});
Column.args = {
  maxValue: 8000,
  columnWidth: 131,
  chartHeight: 350,
  step: 2000,
  data: [3800, 500, 5000, 6200, 2300, 2800, 6200, 2300, 6500],
  categories: ["social media", "customer iteraction", "analytics", "comments", "advertisment", "essential", "comments", "advertisment", "essential"],
};

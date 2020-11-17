import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { SemicircleChartCardComponent } from './semicircle-chart-card.component';
import { NgApexchartsModule } from "ng-apexcharts";
import { SemicircleChartComponent } from '../../semicircle-chart/semicircle-chart.component';

const props = {};

export default {
  title: 'Atoms/Card',
  decorators: [
    moduleMetadata({
      declarations: [
        SemicircleChartCardComponent,
        SemicircleChartComponent
      ],
      imports: [NgApexchartsModule],
    }),
  ],
  argTypes: props,
} as Meta;

const Template: Story<SemicircleChartCardComponent> = (args: SemicircleChartCardComponent) => ({
  component: SemicircleChartCardComponent,
  props: args,
});

export const SemicircleChart = Template.bind({});
SemicircleChart.args = {
  title: 'Overall score',
  percent: 80,
  text: 'Remaining recommendations',
  value: 5
};


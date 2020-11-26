import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { RoundChartComponent } from './round-chart.component';
import { NgApexchartsModule } from "ng-apexcharts";
import { ChartsModule } from 'ng2-charts';
import { ChartModule } from 'angular2-chartjs';
import { CardReportStatusComponent } from '../../card/card-report-status/card-report-status.component';

const props = {
  percent: { control: 'array' },
};

export default {
  title: 'Atoms/Charts',
  decorators: [
    moduleMetadata({
      declarations: [
        RoundChartComponent,
        CardReportStatusComponent
      ],
      imports: [NgApexchartsModule, ChartModule, ChartsModule],
    }),
  ],
  argTypes: props,
} as Meta;

const Template: Story<RoundChartComponent> = (args: RoundChartComponent) => ({
  component: RoundChartComponent,
  props: args,
});

export const Round = Template.bind({});
Round.args = {};

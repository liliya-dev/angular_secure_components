import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { LinearChartComponent } from './linear-chart.component';
import { NgApexchartsModule } from "ng-apexcharts";
import { CardReportStatusComponent } from '../../card/card-report-status/card-report-status.component';

const props = {
  percent: { control: 'array' },
};

export default {
  title: 'Atoms/Charts',
  decorators: [
    moduleMetadata({
      declarations: [
        LinearChartComponent,
        CardReportStatusComponent
      ],
      imports: [NgApexchartsModule],
    }),
  ],
  argTypes: props,
} as Meta;


const Template: Story<LinearChartComponent> = (args: LinearChartComponent) => ({
  component: LinearChartComponent,
  props: args,
});

export const Linear = Template.bind({});
Linear.args = {
  xaxis: ["JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC", "JAN", "FEB", "MAR"],
  series: [
    {
      name: "OPT-IN",
      data: [6200, 2500, 5000, 2000, 3800, 3000, 4500, 3500, 6500, 6000]
    },
    {
      name: "OPT-OUT",
      data: [1200, 1500, 300, 1000, 200, 800, 1000, 1500, 500, 1000]
    }
  ],
  colors: ["#3C814F", "#B01515"],
};

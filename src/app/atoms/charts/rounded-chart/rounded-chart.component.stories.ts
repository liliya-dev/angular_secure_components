import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { RoundedChartComponent } from './rounded-chart.component';
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
        RoundedChartComponent,
        CardReportStatusComponent
      ],
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

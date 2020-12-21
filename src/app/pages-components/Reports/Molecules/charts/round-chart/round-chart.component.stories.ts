import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { RoundChartComponent } from './round-chart.component';
import { ChartsModule } from 'ng2-charts';
import { ChartModule } from 'angular2-chartjs';

const props = {};

export default {
  title: 'Reports/Molecules/Charts',
  decorators: [
    moduleMetadata({
      declarations: [
        RoundChartComponent
      ],
      imports: [ChartModule, ChartsModule],
    }),
  ],
  argTypes: props,
} as Meta;

const Template: Story<RoundChartComponent> = (args: RoundChartComponent) => ({
  component: RoundChartComponent,
  props: args,
});

export const Round = Template.bind({});
Round.args = {
  data: [
    { title: 'Smartphone', value: 2173 },
    { title: 'Desktop', value: 1514 },
    { title: 'Tablet', value: 918 },
    { title: 'Other', value: 1934 },
  ],
  addWord: 'users'
};

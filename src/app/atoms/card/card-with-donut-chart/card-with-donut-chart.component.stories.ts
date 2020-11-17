import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { CardWithDonutChartComponent } from './card-with-donut-chart.component';
import * as PlotlyJS from 'plotly.js/dist/plotly.js';
import { PlotlyModule } from 'angular-plotly.js';

PlotlyModule.plotlyjs = PlotlyJS;

const props = {};

export default {
  title: 'Atoms/Card',
  decorators: [
    moduleMetadata({
      declarations: [
        CardWithDonutChartComponent
      ],
      imports: [PlotlyModule],
    }),
  ],
  argTypes: props,
} as Meta;

const Template: Story<CardWithDonutChartComponent> = (args: CardWithDonutChartComponent) => ({
  component: CardWithDonutChartComponent,
  props: args,
});

export const DonutChartCard = Template.bind({});
DonutChartCard.args = {
  title: 'Cookies by category',
  labels: [
    'in advertisement storajnknnjkjnkj njnknkjnkjnknge objects ', 'local storage objects local storage objects', 
    'in social media', 'in analytics', 'in preferences', 'in preferences' 
  ],
  values: [ 13, 6, 1, 4, 6, 7 ],
};




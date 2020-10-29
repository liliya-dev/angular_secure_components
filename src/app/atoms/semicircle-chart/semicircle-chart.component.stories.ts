import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { SemicircleChartComponent } from './semicircle-chart.component';
import { NgApexchartsModule } from "ng-apexcharts";

const props = {
  percent: { control: 'array' },
};

export default {
  title: 'Atoms/Charts',
  decorators: [
    moduleMetadata({
      declarations: [
        SemicircleChartComponent
      ],
      imports: [NgApexchartsModule],
    }),
  ],
  argTypes: props,
} as Meta;


const Template: Story<SemicircleChartComponent> = (args: SemicircleChartComponent) => ({
  component: SemicircleChartComponent,
  props: args,
});

export const Semicirce = Template.bind({});
Semicirce.args = {
  percent: [90],
};

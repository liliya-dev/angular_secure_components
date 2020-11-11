import { Meta, Story } from '@storybook/angular';
import { StatusStepsDynamicComponent } from './status-steps-dynamic.component';

const props = {
  activePoints: { control: 'number' },
  background: { control: 'color' }
};

export default {
  title: 'Atoms/Steps',
  component: StatusStepsDynamicComponent,
  argTypes: props,
} as Meta;

const Template: Story<StatusStepsDynamicComponent> = (args: StatusStepsDynamicComponent) => ({
  component: StatusStepsDynamicComponent,
  props: args,
});

export const FivePoints = Template.bind({});
FivePoints.args = {
  activePoints: 3,
  totalNumber: 5,
  titles: ['', '', '', '', ''],
  background: 'rgb(238, 236, 235)'
};

export const FourPoints = Template.bind({});
FourPoints.args = {
  activePoints: 2,
  totalNumber: 4,
  titles: ['', '', '', ''],
  background: 'rgb(238, 236, 235)'
};

export const ThreePoints = Template.bind({});
ThreePoints.args = {
  activePoints: 3,
  totalNumber: 3,
  titles: ['', '', ''],
  background: 'rgb(238, 236, 235)'
};

export const WithText = Template.bind({});
WithText.args = {
  activePoints: 2,
  totalNumber: 4,
  titles: ['Add your information', 'Add your information', 'Add your information', 'Add your information'],
  background: 'rgb(238, 236, 235)'
};


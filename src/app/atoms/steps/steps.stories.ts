import { Meta, Story } from '@storybook/angular';
import { StepsComponent } from './steps.component';

const props = {
  activePoints: { control: 'number' }
};

export default {
  title: 'Atoms/Steps',
  component: StepsComponent,
  argTypes: props,
} as Meta;

const Template: Story<StepsComponent> = (args: StepsComponent) => ({
  component: StepsComponent,
  props: args,
});

export const Simple = Template.bind({});
Simple.args = {
  activePoints: 2
};


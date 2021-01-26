import { Meta, Story } from '@storybook/angular';
import { PlanBuilderTogglerComponent } from './plan-builder-toggler.component';

const props = {
  isChecked: { control: 'boolean' },
};

export default {
  title: 'Plan Builder/Atoms/Inputs',
  component: PlanBuilderTogglerComponent,
  argTypes: props,
} as Meta;

const Template: Story<PlanBuilderTogglerComponent> = (args: PlanBuilderTogglerComponent) => ({
  component: PlanBuilderTogglerComponent,
  props: args,
});

export const Toggler = Template.bind({});
Toggler.args = {
  initialValue: true,
  leftValue: 'monthly',
  rightValue: 'annual',
  text: 'Save approx 30%',
  onToggle: (event) => console.log(event)
};

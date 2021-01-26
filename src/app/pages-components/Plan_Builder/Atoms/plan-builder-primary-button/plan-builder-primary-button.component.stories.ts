import { Meta, Story } from '@storybook/angular';
import { PlanBuilderPrimaryButtonComponent } from './plan-builder-primary-button.component';

const props = {
  isChecked: { control: 'boolean' },
};

export default {
  title: 'Plan Builder/Atoms/Buttons',
  component: PlanBuilderPrimaryButtonComponent,
  argTypes: props,
} as Meta;

const Template: Story<PlanBuilderPrimaryButtonComponent> = (args: PlanBuilderPrimaryButtonComponent) => ({
  component: PlanBuilderPrimaryButtonComponent,
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {
  title: 'Buy now'
};
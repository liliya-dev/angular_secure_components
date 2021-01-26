import { Meta, Story } from '@storybook/angular';
import { PlanBuilderSecondaryButtonComponent } from './plan-builder-secondary-button.component';

const props = {
  isChecked: { control: 'boolean' },
};

export default {
  title: 'Plan Builder/Atoms/Buttons',
  component: PlanBuilderSecondaryButtonComponent,
  argTypes: props,
} as Meta;

const Template: Story<PlanBuilderSecondaryButtonComponent> = (args: PlanBuilderSecondaryButtonComponent) => ({
  component: PlanBuilderSecondaryButtonComponent,
  props: args,
});

export const Secondary = Template.bind({});
Secondary.args = {
  title: 'contact sales'
};

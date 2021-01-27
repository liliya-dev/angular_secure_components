import { Meta, Story } from '@storybook/angular';
import { PlanBuilderCheckboxComponent } from './plan-builder-checkbox.component';

const props = {
  isChecked: { control: 'boolean' },
};

export default {
  title: 'Plan Builder/Atoms/Inputs',
  component: PlanBuilderCheckboxComponent,
  argTypes: props,
} as Meta;

const Template: Story<PlanBuilderCheckboxComponent> = (args: PlanBuilderCheckboxComponent) => ({
  component: PlanBuilderCheckboxComponent,
  props: args,
});

export const Switch = Template.bind({});
Switch.args = {
  initialValue: true,
  id: '1',
  onToggle: (event) => console.log(event),
};

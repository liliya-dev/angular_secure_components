import { Meta, Story } from '@storybook/angular';
import { CheckboxInputSwitchComponent } from './checkbox-input-switch.component';

const props = {
  isChecked: { control: 'boolean' },
};

export default {
  title: 'Atoms/Input/Checkbox',
  component: CheckboxInputSwitchComponent,
  argTypes: props,
} as Meta;

const Template: Story<CheckboxInputSwitchComponent> = (args: CheckboxInputSwitchComponent) => ({
  component: CheckboxInputSwitchComponent,
  props: args,
});

export const Switch = Template.bind({});
Switch.args = {
  isChecked: true,
};


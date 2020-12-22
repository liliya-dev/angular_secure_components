import { Meta, Story } from '@storybook/angular';
import { ReportsCheckboxInput } from './reports-checkbox-input.component';

const props = {
  isChecked: { control: 'boolean' },
  title: { control: 'text' }
};

export default {
  title: 'Reports/Atoms/Input',
  component: ReportsCheckboxInput,
  argTypes: props,
} as Meta;

const Template: Story<ReportsCheckboxInput> = (args: ReportsCheckboxInput) => ({
  component: ReportsCheckboxInput,
  props: args,
});

export const Checkbox = Template.bind({});
Checkbox.args = {
  isChecked: true,
  title: ""
};

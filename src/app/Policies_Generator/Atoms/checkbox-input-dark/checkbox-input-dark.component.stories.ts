import { Meta, Story } from '@storybook/angular';
import { PoliciesCheckboxInputDarkComponent } from './checkbox-input-dark.component';

const props = {
  isChecked: { control: 'boolean' },
  title: { control: 'text' }
};

export default {
  title: 'Policies Generator/Atoms',
  component: PoliciesCheckboxInputDarkComponent,
  argTypes: props,
} as Meta;

const Template: Story<PoliciesCheckboxInputDarkComponent> = (args: PoliciesCheckboxInputDarkComponent) => ({
  component: PoliciesCheckboxInputDarkComponent,
  props: args,
});

export const Checkbox = Template.bind({});
Checkbox.args = {
  isChecked: true,
  title: ""
};

import { Meta, Story } from '@storybook/angular';
import { CheckboxInputDarkComponent } from './checkbox-input-dark.component';

const props = {
  isChecked: { control: 'boolean' },
  title: { control: 'text' }
};

export default {
  title: 'Atoms/Input/Checkbox',
  component: CheckboxInputDarkComponent,
  argTypes: props,
} as Meta;

const Template: Story<CheckboxInputDarkComponent> = (args: CheckboxInputDarkComponent) => ({
  component: CheckboxInputDarkComponent,
  props: args,
});

export const Dark = Template.bind({});
Dark.args = {
  isChecked: true,
  title: ""
};

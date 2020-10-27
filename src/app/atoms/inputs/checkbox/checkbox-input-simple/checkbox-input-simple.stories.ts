import { Meta, Story } from '@storybook/angular';
import { CheckboxInputSimpleComponent } from './checkbox-input-simple.component';

const props = {
  isChecked: { control: 'boolean' },
  title: { control: 'text' }
};

export default {
  title: 'Atoms/Input/Checkbox',
  component: CheckboxInputSimpleComponent,
  argTypes: props,
} as Meta;

const Template: Story<CheckboxInputSimpleComponent> = (args: CheckboxInputSimpleComponent) => ({
  component: CheckboxInputSimpleComponent,
  props: args,
});

export const Simple = Template.bind({});
Simple.args = {
  isChecked: true,
  title: ""
};

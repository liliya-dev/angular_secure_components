import { Meta, Story } from '@storybook/angular';
import { CheckboxCircleInputComponent } from './checkbox-circle-input.component';

const props = {
  isChecked: { control: 'boolean' },
  title: { control: 'text' }
};

export default {
  title: 'Atoms/Input/Checkbox',
  component: CheckboxCircleInputComponent,
  argTypes: props,
} as Meta;

const Template: Story<CheckboxCircleInputComponent> = (args: CheckboxCircleInputComponent) => ({
  component: CheckboxCircleInputComponent,
  props: args,
});

export const Circle = Template.bind({});
Circle.args = {
  isChecked: true,
  title: ""
};

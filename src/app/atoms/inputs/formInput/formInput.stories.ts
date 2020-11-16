import { Meta, Story } from '@storybook/angular';
import { formInputComponent } from './formInput.component';

const props = {
  placeholder: { control: 'text' },
};

export default {
  title: 'Atoms/Input',
  component: formInputComponent,
  argTypes: props,
} as Meta;

const Template: Story<formInputComponent> = (args: formInputComponent) => ({
  component: formInputComponent,
  props: args,
});

export const Text = Template.bind({});
Text.args = {
  placeholderText: "First Name",
  isBold: true,
  initialValue: "Secure Privacy",
  changeValueParentFunction: (value) => console.log('changeValueParentFunction works', value)
};



import { Meta, Story } from '@storybook/angular';
import { gradientButtonComponent } from './gradientButton.component';

const props = {
  title: { control: 'text' },
};

export default {
  title: 'Atoms/Button',
  component: gradientButtonComponent,
  argTypes: props,
} as Meta;

const Template: Story<gradientButtonComponent> = (args: gradientButtonComponent) => ({
  component: gradientButtonComponent,
  props: args,
});

export const Gradient = Template.bind({});
  Gradient.args = {
    title: "next",
};


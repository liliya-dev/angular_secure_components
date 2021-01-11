import { Meta, Story } from '@storybook/angular';
import { GradientTextComponent } from './gradient-text.component';

const props = {
  title: { control: 'text' },
};

export default {
  title: 'Atoms/Text/Gradient text',
  component: GradientTextComponent,
  argTypes: props,
} as Meta;

const Template: Story<GradientTextComponent> = (args: GradientTextComponent) => ({
  component: GradientTextComponent,
  props: args,
});

export const Green = Template.bind({});
Green.args = {
  title: "Send scan reports via email",
};

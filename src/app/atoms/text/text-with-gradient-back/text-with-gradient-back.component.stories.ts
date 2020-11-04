import { Meta, Story } from '@storybook/angular';
import { TextWithGradientBackComponent } from './text-with-gradient-back.component';

const props = {
  titles: { control: 'array' },
};

export default {
  title: 'Atoms/Text/Gradient background',
  component: TextWithGradientBackComponent,
  argTypes: props,
} as Meta;

const Template: Story<TextWithGradientBackComponent> = (args: TextWithGradientBackComponent) => ({
  component: TextWithGradientBackComponent,
  props: args,
});

export const Green = Template.bind({});
Green.args = {
  titles: ["EU-U.S. Privacy Shield"],
};

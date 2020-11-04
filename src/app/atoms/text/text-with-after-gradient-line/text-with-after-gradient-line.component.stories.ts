import { Meta, Story } from '@storybook/angular';
import { TextWithAfterGradientLineComponent } from './text-with-after-gradient-line.component';

const props = {
  title: { control: 'text' },
};

export default {
  title: 'Atoms/Text/Gradient text with line',
  component: TextWithAfterGradientLineComponent,
  argTypes: props,
} as Meta;

const Template: Story<TextWithAfterGradientLineComponent> = (args: TextWithAfterGradientLineComponent) => ({
  component: TextWithAfterGradientLineComponent,
  props: args,
});

export const Green = Template.bind({});
Green.args = {
  title: "scan report",
};

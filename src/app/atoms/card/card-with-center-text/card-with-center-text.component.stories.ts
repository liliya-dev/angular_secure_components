import { Meta, Story } from '@storybook/angular';
import { CardWithCenterTextComponent } from './card-with-center-text.component';

const props = {
  title: { control: 'text' },
  value: { control: 'text' },
  text: { control: 'text' },
};

export default {
  title: 'Atoms/Card',
  component: CardWithCenterTextComponent,
  argTypes: props,
} as Meta;

const Template: Story<CardWithCenterTextComponent> = (args: CardWithCenterTextComponent) => ({
  component: CardWithCenterTextComponent,
  props: args,
});

export const CardWithCenterText = Template.bind({});
CardWithCenterText.args = {
  text: 'Pages scanned',
  value: 313,
  title: "Pages"
};
import { Meta, Story } from '@storybook/angular';
import { CardWithCenterTextComponent } from './card-with-center-text.component';

const props = {
  backgroundColor: { control: 'color' },
  color: { control: 'color' },
  src: { control: 'text' },
  title: { control: 'text' },
  text: { control: 'text' },
  isActive: { control: 'boolean' }
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
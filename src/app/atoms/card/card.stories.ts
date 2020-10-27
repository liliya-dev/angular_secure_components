import { Meta, Story } from '@storybook/angular';
import { CardComponent } from './card.component';

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
  component: CardComponent,
  argTypes: props,
} as Meta;

const Template: Story<CardComponent> = (args: CardComponent) => ({
  component: CardComponent,
  props: args,
});

export const Simple = Template.bind({});
Simple.args = {
  src: 'assets/images/flags/ccpa.png',
  title: 'GDPR, EPRIVACY',
  text: 'Europe', 
  isActive: false,
};




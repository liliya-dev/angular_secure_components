import { Meta, Story } from '@storybook/angular';
import { BillingCardComponent } from './billing-card.component';

const props = {
  title: { control: 'text' },
};

export default {
  title: 'Billing Preferences/Atoms',
  component: BillingCardComponent,
  argTypes: props,
} as Meta;

const Template: Story<BillingCardComponent> = (args: BillingCardComponent) => ({
  component: BillingCardComponent,
  props: args,
});

export const Card = Template.bind({});
Card.args = {
  lastNumbers: '0000',
  date: '**/**',
  name: 'Name'
};
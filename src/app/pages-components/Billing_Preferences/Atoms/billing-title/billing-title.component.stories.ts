import { Meta, Story } from '@storybook/angular';
import { BillingTitleComponent } from './billing-title.component';

const props = {
  title: { control: 'text' },
};

export default {
  title: 'Billing Preferences/Atoms',
  component: BillingTitleComponent,
  argTypes: props,
} as Meta;

const Template: Story<BillingTitleComponent> = (args: BillingTitleComponent) => ({
  component: BillingTitleComponent,
  props: args,
});

export const Title = Template.bind({});
Title.args = {
  title: "Payment Details",
};
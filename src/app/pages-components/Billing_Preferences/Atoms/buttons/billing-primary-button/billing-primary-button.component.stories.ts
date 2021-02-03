import { Meta, Story } from '@storybook/angular';
import { BillingPrimaryButtonComponent } from './billing-primary-button.component';

const props = {
  isChecked: { control: 'boolean' },
};

export default {
  title: 'Billing Preferences/Atoms/Buttons',
  component: BillingPrimaryButtonComponent,
  argTypes: props,
} as Meta;

const Template: Story<BillingPrimaryButtonComponent> = (args: BillingPrimaryButtonComponent) => ({
  component: BillingPrimaryButtonComponent,
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {
  title: 'View pricing'
};
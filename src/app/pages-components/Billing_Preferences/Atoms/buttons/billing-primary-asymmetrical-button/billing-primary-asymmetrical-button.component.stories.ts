import { Meta, Story } from '@storybook/angular';
import { BillingPrimaryAsymmetricalButtonComponent } from './billing-primary-asymmetrical-button.component';

const props = {
  isChecked: { control: 'boolean' },
};

export default {
  title: 'Billing Preferences/Atoms/Buttons',
  component: BillingPrimaryAsymmetricalButtonComponent,
  argTypes: props,
} as Meta;

const Template: Story<BillingPrimaryAsymmetricalButtonComponent> = (args: BillingPrimaryAsymmetricalButtonComponent) => ({
  component: BillingPrimaryAsymmetricalButtonComponent,
  props: args,
});

export const Asymmetrical = Template.bind({});
Asymmetrical.args = {
  title: 'change plan'
};
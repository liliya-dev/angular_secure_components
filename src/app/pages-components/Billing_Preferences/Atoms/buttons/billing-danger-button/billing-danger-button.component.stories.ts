import { Meta, Story } from '@storybook/angular';
import { BillingDangerButtonComponent } from './billing-danger-button.component';

const props = {
  isChecked: { control: 'boolean' },
};

export default {
  title: 'Billing Preferences/Atoms/Buttons',
  component: BillingDangerButtonComponent,
  argTypes: props,
} as Meta;

const Template: Story<BillingDangerButtonComponent> = (args: BillingDangerButtonComponent) => ({
  component: BillingDangerButtonComponent,
  props: args,
});

export const Danger = Template.bind({});
Danger.args = {
  title: 'Downgrade'
};

export const DangerShort = Template.bind({});
DangerShort.args = {
  title: 'Downgrade',
  isShort: true
};
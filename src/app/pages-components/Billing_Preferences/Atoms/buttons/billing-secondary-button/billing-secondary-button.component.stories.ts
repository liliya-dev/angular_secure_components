import { Meta, Story } from '@storybook/angular';
import { BillingSecondaryButtonComponent } from './billing-secondary-button.component';

const props = {
  isChecked: { control: 'boolean' },
};

export default {
  title: 'Billing Preferences/Atoms/Buttons',
  component: BillingSecondaryButtonComponent,
  argTypes: props,
} as Meta;

const Template: Story<BillingSecondaryButtonComponent> = (args: BillingSecondaryButtonComponent) => ({
  component: BillingSecondaryButtonComponent,
  props: args,
});

export const Secondary = Template.bind({});
Secondary.args = {
  title: 'cancel'
};

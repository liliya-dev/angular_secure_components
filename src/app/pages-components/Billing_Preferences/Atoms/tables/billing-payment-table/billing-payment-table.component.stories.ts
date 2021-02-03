import { CommonModule } from '@angular/common';
import { HttpClientModule} from '@angular/common/http';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { BillingPaymentTableComponent } from './billing-payment-table.component';

const props = {};

export default {
  title: 'Billing Preferences/Atoms/Tables',
  decorators: [
    moduleMetadata({
      declarations: [BillingPaymentTableComponent],
      imports: [HttpClientModule, CommonModule]
    }),
  ],
  argTypes: props,
} as Meta;

const Template: Story<BillingPaymentTableComponent> = (args: BillingPaymentTableComponent) => ({
  component: BillingPaymentTableComponent,
  props: args,
});

export const Payment = Template.bind({});
Payment.args = {
  initialData: [
    {
      status: true,
      details: 'Free plan',
      cycle: 'Annual',
      domains: 1,
      unitPrice: 0.0,
    },
    {
      status: false,
      details: 'Free plan',
      cycle: 'Annual',
      domains: 6,
      unitPrice: 0.6,
    },
    {
      status: false,
      details: 'Free plan',
      cycle: 'Annual',
      domains: 2,
      unitPrice: 0.6,
    }
  ]
};

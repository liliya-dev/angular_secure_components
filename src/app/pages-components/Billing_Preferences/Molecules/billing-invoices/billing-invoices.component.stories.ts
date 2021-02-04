import { HttpClientModule} from '@angular/common/http';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { BillingInvoicesComponent } from './billing-invoices.component';
import { BillingTitleComponent } from '../../Atoms/billing-title/billing-title.component';

const props = {};

export default {
  title: 'Billing Preferences/Molecules',
  decorators: [
    moduleMetadata({
      declarations: [
        BillingInvoicesComponent,
        BillingTitleComponent,
      ],
      imports: [HttpClientModule]
    }),
  ],
  argTypes: props,
} as Meta;

const Template: Story<BillingInvoicesComponent> = (args: BillingInvoicesComponent) => ({
  component: BillingInvoicesComponent,
  props: args,
});

export const Invoices = Template.bind({});
Invoices.args = {
  title: 'Billing and invoices',
  initialData: [
    {
      date: '25.11.2020',
      amount: 0,
      paid: false,
      invoice: 'some invoice data'
    },
    {
      date: '28.11.2020',
      amount: 1,
      paid: true,
      invoice: 'some invoice data'
    },
    {
      date: '26.11.2020',
      amount: 0,
      paid: false,
      invoice: 'some invoice data'
    }
  ]
};

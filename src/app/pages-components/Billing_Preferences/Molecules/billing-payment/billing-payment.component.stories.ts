import { HttpClientModule} from '@angular/common/http';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { NgSelectModule } from '@ng-select/ng-select';
import { BillingPrimaryButtonComponent } from '../../Atoms/buttons/billing-primary-button/billing-primary-button.component';
import { BillingInputComponent } from '../../Atoms/inputs/billing-input/billing-input.component';
import { BillingSelectComponent } from '../../Atoms/inputs/billing-select/billing-select.component';
import { BillingPaymentTableComponent } from '../../Atoms/tables/billing-payment-table/billing-payment-table.component';
import { BillingPaymentComponent } from './billing-payment.component';
import { BillingTitleComponent } from '../../Atoms/billing-title/billing-title.component';
import { BillingCardComponent} from '../../Atoms/billing-card/billing-card.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const props = {};

export default {
  title: 'Billing Preferences/Molecules',
  decorators: [
    moduleMetadata({
      declarations: [
        BillingSelectComponent,
        BillingInputComponent,
        BillingPaymentComponent, 
        BillingPrimaryButtonComponent,
        BillingPaymentTableComponent,
        BillingTitleComponent,
        BillingCardComponent
      ],
      imports: [HttpClientModule, NgSelectModule, FormsModule, ReactiveFormsModule ]
    }),
  ],
  argTypes: props,
} as Meta;

const Template: Story<BillingPaymentComponent> = (args: BillingPaymentComponent) => ({
  component: BillingPaymentComponent,
  props: args,
});

export const PaymentForm = Template.bind({});
PaymentForm.args = {
  tableData: [
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

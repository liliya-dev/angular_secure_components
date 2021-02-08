import { CommonModule } from '@angular/common';
import { HttpClientModule} from '@angular/common/http';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { BillingModalComponent } from './billing-modal.component';
import { BillingSecondaryButtonComponent } from '../buttons/billing-secondary-button/billing-secondary-button.component';
import { BillingDangerButtonComponent } from '../buttons/billing-danger-button/billing-danger-button.component';

const props = {};

export default {
  title: 'Billing Preferences/Atoms/Modals',
  decorators: [
    moduleMetadata({
      declarations: [BillingModalComponent, BillingDangerButtonComponent, BillingSecondaryButtonComponent],
      imports: [HttpClientModule, CommonModule]
    }),
  ],
  argTypes: props,
} as Meta;

const Template: Story<BillingModalComponent> = (args: BillingModalComponent) => ({
  component: BillingModalComponent,
  props: args,
});

export const Error = Template.bind({});
Error.args = {
  title: 'Are You Sure?',
  text: 'Are you sure you want to unsubscribe from your plan? You will be downgrade to the <b>"Freemium plan"</b>.',
  secondaryButtonTitle: 'Cancel',
  dangerButtonTitle: 'Downgrade',
  close: () => console.log('closed modal'),
  onSecondaryClick: () => console.log('secondary button works'),
  onDangerClick: () => console.log('danger button works'),
};

export const Approve = Template.bind({});
Approve.args = {
  title: 'Oops, Sorry',
  text: 'We cannot downgrade your account as you have more than 1 domain. Please delete your domains until you have 1 to enable the free plan.',
  secondaryButtonTitle: 'Close',
  close: () => console.log('closed modal'),
  onSecondaryClick: () => console.log('secondary button works'),
};

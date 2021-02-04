import { HttpClientModule} from '@angular/common/http';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { BillingPrimaryAsymmetricalButtonComponent } from '../../Atoms/buttons/billing-primary-asymmetrical-button/billing-primary-asymmetrical-button.component';
import { BillingPlanComponent } from './billing-plan.component';
import { BillingTitleComponent } from '../../Atoms/billing-title/billing-title.component';
import { BillingDangerButtonComponent } from '../../Atoms/buttons/billing-danger-button/billing-danger-button.component';
import { BillingModalComponent } from '../../Atoms/billing-modal/billing-modal.component';
import { BillingSecondaryButtonComponent } from '../../Atoms/buttons/billing-secondary-button/billing-secondary-button.component';

const props = {};

export default {
  title: 'Billing Preferences/Molecules/Plan',
  decorators: [
    moduleMetadata({
      declarations: [
        BillingPrimaryAsymmetricalButtonComponent,
        BillingTitleComponent,
        BillingPlanComponent,
        BillingDangerButtonComponent,
        BillingModalComponent,
        BillingSecondaryButtonComponent
      ],
      imports: [HttpClientModule]
    }),
  ],
  argTypes: props,
} as Meta;

const Template: Story<BillingPlanComponent> = (args: BillingPlanComponent) => ({
  component: BillingPlanComponent,
  props: args,
});

export const Freemium = Template.bind({});
Freemium.args = {
  features:[
    'Cookie banner', 'Cookie consent (limited)', 'Website scanning', 'Cookie blocking', 'Custom CSS styling', '15 cookie banner designs'
  ],
  featuresTitle: '<b>Features included:</b>',
  title: 'Freemium',
  period: 'month',
  price: '0',
  currency: 'usd',
  description: 'For small companies just starting out their cookie consent journey',
  isFreemium: true,
  date: 'JAN 20, 2020',
  domainsNumber: 1
};

export const BusinessSeveralDomains = Template.bind({});
BusinessSeveralDomains.args = {
  features:[
    'Removal of Secure Privacy', 'Branding', 'Preference center', 'Cookie policy', 
    'Privacy policy', 'Geo-targeting', '70+ language support', 'IAB 2.0', 'Data location in EU'
  ],
  featuresTitle: 'All featuers in <b>Free</b>, plus:',
  title: 'Business',
  period: 'month',
  price: '17',
  currency: 'usd',
  description: 'Tailored and customisable cookie solution for growing businesses',
  isFreemium: false,
  date: 'JAN 20, 2020',
  domainsNumber: 4
};

export const BusinessOneDomain = Template.bind({});
BusinessOneDomain.args = {
  features:[
    'Removal of Secure Privacy', 'Branding', 'Preference center', 'Cookie policy', 
    'Privacy policy', 'Geo-targeting', '70+ language support', 'IAB 2.0', 'Data location in EU'
  ],
  featuresTitle: 'All featuers in <b>Free</b>, plus:',
  title: 'Business',
  period: 'month',
  price: '17',
  currency: 'usd',
  description: 'Tailored and customisable cookie solution for growing businesses',
  isFreemium: false,
  date: 'JAN 20, 2020',
  domainsNumber: 1
};
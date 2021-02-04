import { HttpClientModule} from '@angular/common/http';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { BillingPrimaryButtonComponent } from '../../Atoms/buttons/billing-primary-button/billing-primary-button.component';
import { BillingWarningComponent } from './billing-warning.component';

const props = {};

export default {
  title: 'Billing Preferences/Molecules',
  decorators: [
    moduleMetadata({
      declarations: [
        BillingPrimaryButtonComponent,
        BillingWarningComponent
      ],
      imports: [HttpClientModule]
    }),
  ],
  argTypes: props,
} as Meta;

const Template: Story<BillingWarningComponent> = (args: BillingWarningComponent) => ({
  component: BillingWarningComponent,
  props: args,
});

export const Warning = Template.bind({});
Warning.args = {};

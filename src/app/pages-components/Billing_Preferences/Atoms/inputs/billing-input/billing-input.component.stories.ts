import { CommonModule } from '@angular/common';
import { HttpClientModule} from '@angular/common/http';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { BillingInputComponent } from './billing-input.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const props = {};

export default {
  title: 'Billing Preferences/Atoms/Inputs',
  decorators: [
    moduleMetadata({
      declarations: [BillingInputComponent],
      imports: [HttpClientModule, CommonModule, FormsModule, ReactiveFormsModule]
    }),
  ],
  argTypes: props,
} as Meta;

const Template: Story<BillingInputComponent> = (args: BillingInputComponent) => ({
  component: BillingInputComponent,
  props: args,
});

export const Text = Template.bind({});
Text.args = {
  id: '1',
  placeholderText: '0000 - 0000 - 0000 - 0000',
  initialValue: '',
  isError: false,
};

export const CVV = Template.bind({});
CVV.args = {
  id: '2',
  placeholderText: 'CVV',
  initialValue: '',
  isCvv: true,
  isError: false,
};

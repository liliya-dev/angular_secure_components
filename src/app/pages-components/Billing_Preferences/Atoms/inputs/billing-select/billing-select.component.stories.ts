import { CommonModule } from '@angular/common';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { BillingSelectComponent } from './billing-select.component';
import { NgSelectModule } from '@ng-select/ng-select';

const props = {
  initialValue: { control: 'text' },
  items: { control: 'array' }
};

export default {
  title: 'Billing Preferences/Atoms/Inputs',
  decorators: [
    moduleMetadata({
      declarations: [BillingSelectComponent],
      imports: [CommonModule, NgSelectModule]
    }),
  ],
  argTypes: props,
} as Meta;

const Template: Story<BillingSelectComponent> = (args: BillingSelectComponent) => ({
  component: BillingSelectComponent,
  props: args,
});

export const SelectMonth = Template.bind({});
SelectMonth.args = {
  isError: false,
  parentHandler: (value) => console.log('works', value),
  initialValue: "Month",
  items: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
};

export const SelectYear = Template.bind({});
SelectYear.args = {
  parentHandler: (value) => console.log('works', value),
  initialValue: "Year",
  items: [2021, 2022, 2023, 2024, 2025, 2026, 2027],
  isError: false
};
import { Meta, moduleMetadata, Story } from '@storybook/angular';

import { PlanBuilderDomainsSelectComponent } from './plan-builder-domains-select.component';
import { PlanBuilderRangeComponent } from '../../Atoms/plan-builder-range/plan-builder-range.component';

const props = {
  isChecked: { control: 'boolean' },
};

export default {
  title: 'Plan Builder/Molecules',
  decorators: [
    moduleMetadata({
      declarations: [
        PlanBuilderDomainsSelectComponent,
        PlanBuilderRangeComponent
      ],
    }),
  ],
  argTypes: props,
} as Meta;


const Template: Story<PlanBuilderDomainsSelectComponent> = (args: PlanBuilderDomainsSelectComponent) => ({
  component: PlanBuilderDomainsSelectComponent,
  props: args,
});

export const SelectDomains = Template.bind({});
SelectDomains.args = {
  values: [
    { value: 1, price: 7 },
    { value: 5, price: 10 },
    { value: 10, price: 17 },
    { value: 20, price: 27 },
    { value: 30, price: 37 },
    { value: 40, price: 47 },
  ],
  currency: 'usd',
  initialValue: 10,
  period: 'per month',
  discount: 30
};

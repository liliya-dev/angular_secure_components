import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { PlanBuilderPlanComponent } from './plan-builder-plan.component';
import { PlanBuilderTogglerComponent } from '../../Atoms/plan-builder-toggler/plan-builder-toggler.component';
import { PlanBuilderPrimaryButtonComponent } from '../../Atoms/plan-builder-primary-button/plan-builder-primary-button.component';

const props = {
  isChecked: { control: 'boolean' },
};

export default {
  title: 'Plan Builder/Molecules',
  decorators: [
    moduleMetadata({
      declarations: [
        PlanBuilderPlanComponent,
        PlanBuilderTogglerComponent,
        PlanBuilderPrimaryButtonComponent
      ],
    }),
  ],
  argTypes: props,
} as Meta;


const Template: Story<PlanBuilderPlanComponent> = (args: PlanBuilderPlanComponent) => ({
  component: PlanBuilderPlanComponent,
  props: args,
});

export const Plan = Template.bind({});
Plan.args = {
  domainsNumber: 10,
  domainsPrice: 204,
  currency: 'usd',
  modules: [
    { title: 'US', price: 48 },
    { title: 'PDPA', price: 48 },
  ],
  initialPeriod: 'annual',
  title: 'Custom Plan',
  salePercent: 30
};
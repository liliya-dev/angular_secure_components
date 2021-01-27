import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { PlanBuilderCardComponent } from './plan-builder-card.component';
import { PlanBuilderCheckboxComponent } from '../../Atoms/plan-builder-checkbox/plan-builder-checkbox.component';

const props = {
  isChecked: { control: 'boolean' },
};

export default {
  title: 'Plan Builder/Molecules',
  decorators: [
    moduleMetadata({
      declarations: [
        PlanBuilderCardComponent,
        PlanBuilderCheckboxComponent
      ],
    }),
  ],
  argTypes: props,
} as Meta;


const Template: Story<PlanBuilderCardComponent> = (args: PlanBuilderCardComponent) => ({
  component: PlanBuilderCardComponent,
  props: args,
});

export const Card = Template.bind({});
Card.args = {
  id: 1,
  policyTitle: 'GDPR, eprivacy',
  policyText: 'Europe',
  text: 'Add support fot the European GDPR & ePrivacy directive. Add support fot the European GDPR & ePrivacy directive. This include EU geotargeting, website scanning including adequate country matching, cookie declaration and banners that are compliant with the GDPR requirements.',
  isSelected: true,
  price: 4.25,
  period: 'per month',
  imagePath: 'assets/images/flags/euro.png',
  currency: 'usd',
  isMobile: false
};
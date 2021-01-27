import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { PlanBuilderCardsListComponent } from './plan-builder-cards-list.component';
import { PlanBuilderCardComponent } from '../../Molecules/plan-builder-card/plan-builder-card.component';
import { PlanBuilderCheckboxComponent } from '../../Atoms/plan-builder-checkbox/plan-builder-checkbox.component';

const props = {};

export default {
  title: 'Plan Builder/Organisms',
  decorators: [
    moduleMetadata({
      declarations: [
        PlanBuilderCardsListComponent,
        PlanBuilderCheckboxComponent,
        PlanBuilderCardComponent
      ],
    }),
  ],
  argTypes: props,
} as Meta;


const Template: Story<PlanBuilderCardsListComponent> = (args: PlanBuilderCardsListComponent) => ({
  component: PlanBuilderCardsListComponent,
  props: args,
});

export const CardsList = Template.bind({});
CardsList.args = {
  cards: [
    {
      id: 1,
      policyTitle: 'GDPR, eprivacy',
      policyText: 'Europe',
      text: 'Add support fot the European GDPR & ePrivacy directive. This include EU geotargeting,, Add support fot the European GDPR & ePrivacy directive. This include EU geotargeting, website scanning including adequate country matching, cookie declaration and banners that are compliant with the GDPR requirements.',
      price: 4.25,
      imagePath: 'assets/images/flags/euro.png',
    },
    {
      id: 2,
      policyTitle: 'GDPR, eprivacy',
      policyText: 'Europe',
      text: 'Add support fot the European GDPR & ePrivacy directive. This include EU geotargeting, website scanning including adequate country matching, cookie declaration and banners that are compliant with the GDPR requirements.',
      price: 4.25,
      imagePath: 'assets/images/flags/euro.png',
    },
    {
      id: 3,
      policyTitle: 'GDPR, eprivacy',
      policyText: 'Europe',
      text: 'Add support fot the European GDPR & ePrivacy directive. This include EU geotargeting, website scanning including adequate country matching, cookie declaration and banners that are compliant with the GDPR requirements.',
      price: 4.25,
      imagePath: 'assets/images/flags/euro.png',
    },
    {
      id: 4,
      policyTitle: 'GDPR, eprivacy',
      policyText: 'Europe',
      text: 'Add support fot the European GDPR & ePrivacy directive. This include EU geotargeting, website scanning including adequate country matching, cookie declaration and banners that are compliant with the GDPR requirements.',
      price: 4.25,
      imagePath: 'assets/images/flags/euro.png',
    },
    {
      id: 5,
      policyTitle: 'GDPR, eprivacy',
      policyText: 'Europe',
      text: 'Add support fot the European GDPR & ePrivacy directive. This include EU geotargeting, website scanning including adequate country matching, cookie declaration and banners that are compliant with the GDPR requirements.',
      price: 4.25,
      imagePath: 'assets/images/flags/euro.png',
    },
    {
      id: 6,
      policyTitle: 'GDPR, eprivacy',
      policyText: 'Europe',
      text: 'Add support fot the European GDPR & ePrivacy directive. This include EU geotargeting, website scanning including adequate country matching, cookie declaration and banners that are compliant with the GDPR requirements.',
      price: 4.25,
      imagePath: 'assets/images/flags/euro.png',
    },
    {
      id: 7,
      policyTitle: 'GDPR, eprivacy',
      policyText: 'Europe',
      text: 'Add support fot the European GDPR & ePrivacy directive. This include EU geotargeting, website scanning including adequate country matching, cookie declaration and banners that are compliant with the GDPR requirements.',
      price: 4.25,
      imagePath: 'assets/images/flags/euro.png',
    },
    {
      id: 8,
      policyTitle: 'GDPR, eprivacy',
      policyText: 'Europe',
      text: 'Add support fot the European GDPR & ePrivacy directive. This include EU geotargeting, website scanning including adequate country matching, cookie declaration and banners that are compliant with the GDPR requirements.',
      price: 4.25,
      imagePath: 'assets/images/flags/euro.png',
    }
  ],
  currency: 'usd',
  selectedCards: [ 1, 2, 5 ],
  period: 'per month',
};
import { Meta, moduleMetadata, Story } from '@storybook/angular';

import { PlanBuilderContactUsComponent } from './plan-builder-contact-us.component';
import { PlanBuilderSecondaryButtonComponent } from '../../Atoms/plan-builder-secondary-button/plan-builder-secondary-button.component';

const props = {
  isChecked: { control: 'boolean' },
};

export default {
  title: 'Plan Builder/Molecules',
  decorators: [
    moduleMetadata({
      declarations: [
        PlanBuilderContactUsComponent,
        PlanBuilderSecondaryButtonComponent
      ],
    }),
  ],
  argTypes: props,
} as Meta;


const Template: Story<PlanBuilderContactUsComponent> = (args: PlanBuilderContactUsComponent) => ({
  component: PlanBuilderContactUsComponent,
  props: args,
});

export const ContactUs = Template.bind({});
ContactUs.args = {
  title: 'More than 40 domains?',
  text: 'We provide tailored pricing and powerful enterprise features. Contact sales to learn how Secure Privacy can help your company with data privacy at scale.'
};

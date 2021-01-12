import { Meta, Story } from '@storybook/angular';
import { SimplePolicyGeneratorButtonComponent } from './simple-policy-generator-button.component';

const props = {};

export default {
  title: 'Policies Customize/Atoms/Buttons',
  component: SimplePolicyGeneratorButtonComponent,
  argTypes: props,
} as Meta;

const Template: Story<SimplePolicyGeneratorButtonComponent> = (args: SimplePolicyGeneratorButtonComponent) => ({
  component: SimplePolicyGeneratorButtonComponent,
  props: args,
});

export const Simple = Template.bind({});
Simple.args = {
  title: "Confirm"
};

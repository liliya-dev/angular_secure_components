import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { PoliciesButtonComponent } from './policies-button.component';

const props = {};

export default {
  title: 'Policies Generator/Atoms/Buttons',
  decorators: [
    moduleMetadata({
      declarations: [PoliciesButtonComponent],
      imports: []
    }),
  ],
  argTypes: props,
} as Meta;

const Template: Story<PoliciesButtonComponent> = (args: PoliciesButtonComponent) => ({
  component: PoliciesButtonComponent,
  props: args,
});

export const Secondary = Template.bind({});
Secondary.args = {
  title: "choose",
  classes: 'btn-secondary'
};

export const SuccessAsimetricBig = Template.bind({});
SuccessAsimetricBig.args = {
  title: "save",
  classes: "btn-success btn-success--large"
};

export const SuccessAsimetricSmall = Template.bind({});
SuccessAsimetricSmall.args = {
  title: "add icon",
  classes: "btn-success btn-success--small"
};
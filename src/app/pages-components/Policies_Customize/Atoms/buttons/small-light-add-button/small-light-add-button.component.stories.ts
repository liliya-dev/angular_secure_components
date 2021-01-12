import { Meta, Story } from '@storybook/angular';
import { PoliciesSmallLightAddButtonComponent } from './small-light-add-button.component';

const props = {};

export default {
  title: 'Policies Customize/Atoms/Buttons',
  component: PoliciesSmallLightAddButtonComponent,
  argTypes: props,
} as Meta;

const Template: Story<PoliciesSmallLightAddButtonComponent> = (args: PoliciesSmallLightAddButtonComponent) => ({
  component: PoliciesSmallLightAddButtonComponent,
  props: args,
});

export const SmallLight = Template.bind({});
SmallLight.args = {
  title: "Add table",
  classes: "app-small-light-add-button"
};

export const BigLight = Template.bind({});
BigLight.args = {
  title: "Add row",
  classes: "app-big-light-add-button"
};




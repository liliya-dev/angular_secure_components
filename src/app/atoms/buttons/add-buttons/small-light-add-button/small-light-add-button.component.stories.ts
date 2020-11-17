import { Meta, Story } from '@storybook/angular';
import { SmallLightAddButtonComponent } from './small-light-add-button.component';

const props = {};

export default {
  title: 'Atoms/Button/Add Buttons',
  component: SmallLightAddButtonComponent,
  argTypes: props,
} as Meta;

const Template: Story<SmallLightAddButtonComponent> = (args: SmallLightAddButtonComponent) => ({
  component: SmallLightAddButtonComponent,
  props: args,
});

export const SmallLight = Template.bind({});
SmallLight.args = {
  title: "Add table",
  classes: "app-small-light-add-button fs-14-gramm-400-light"
};

export const BigLight = Template.bind({});
BigLight.args = {
  title: "Add row",
  classes: "app-big-light-add-button fs-14-gramm-400-light"
};




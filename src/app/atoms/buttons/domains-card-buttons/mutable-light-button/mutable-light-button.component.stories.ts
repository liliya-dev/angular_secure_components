import { Meta, Story } from '@storybook/angular';
import { MutableLightButtonComponent } from './mutable-light-button.component';

const props = {};

export default {
  title: 'Atoms/Button/Mutable Light',
  component: MutableLightButtonComponent,
  argTypes: props,
} as Meta;

const Template: Story<MutableLightButtonComponent> = (args: MutableLightButtonComponent) => ({
  component: MutableLightButtonComponent,
  props: args,
});

export const Options = Template.bind({});
Options.args = {
  title: "Options",
};

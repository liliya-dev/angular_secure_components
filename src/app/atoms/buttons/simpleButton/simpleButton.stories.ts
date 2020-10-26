import { action } from '@storybook/addon-actions';
import { Meta, Story } from '@storybook/angular';
import { simpleButtonComponent } from './simpleButton.component';

const props = {
  backgroundColor: { control: 'color' },
  color: { control: 'color' },
  title: { control: 'text'},
};

export default {
  title: 'Atoms/Button',
  component: simpleButtonComponent,
  argTypes: props,
} as Meta;

const Template: Story<simpleButtonComponent> = (args: simpleButtonComponent) => ({
  component: simpleButtonComponent,
  props: args,
});

export const Danger = Template.bind({});
Danger.args = {
  title: "clear",
  classes: "btn-danger fs-12-sofia-800 btn-app btn-app--h36"
};

export const Transparent = Template.bind({});
Transparent.args = {
  title: "back",
  classes: "btn-app fs-16-sofia-500 btn-transparent"
};

export const Success = Template.bind({});
Success.args = {
  title: "save",
  classes: "btn-app--h36 btn-app btn-success fs-12-sofia-800"
};

export const SuccessAsimetric = Template.bind({});
SuccessAsimetric.args = {
  title: "notify me",
  classes: "btn-app--asimetric  btn-success-asimetric fs-16-sofia-800"
};

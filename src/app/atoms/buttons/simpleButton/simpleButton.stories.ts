import { Meta, Story } from '@storybook/angular';
import { simpleButtonComponent } from './simpleButton.component';

const props = {
  backgroundColor: { control: 'color' },
  color: { control: 'color' },
  title: { control: 'text' },
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
  classes: "btn-danger"
};

export const DangerBig = Template.bind({});
DangerBig.args = {
  title: "clear",
  classes: "btn-danger-big"
};

export const Transparent = Template.bind({});
Transparent.args = {
  title: "back",
  classes: "btn-transparent"
};

export const Success = Template.bind({});
Success.args = {
  title: "save",
  classes: "btn-success"
};

export const SuccessBig = Template.bind({});
SuccessBig.args = {
  title: "got it",
  classes: "btn-success-big"
};

export const SuccessAsimetric = Template.bind({});
SuccessAsimetric.args = {
  title: "notify me",
  classes: "btn-success-asimetric"
};

export const SuccessAsimetricWithIcon = Template.bind({});
SuccessAsimetricWithIcon.args = {
  title: "next",
  classes: "btn-success-asimetric",
  srcPath: 'assets/images/next.svg'
};


export const Choose = Template.bind({});
Choose.args = {
  title: "choose",
  classes: "btn-choose"
};
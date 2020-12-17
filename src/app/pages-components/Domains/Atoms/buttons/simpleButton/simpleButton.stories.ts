import { Meta, Story } from '@storybook/angular';
import { DomainsSimpleButtonComponent } from './simpleButton.component';

const props = {
  backgroundColor: { control: 'color' },
  color: { control: 'color' },
  title: { control: 'text' },
};

export default {
  title: 'Domains/Atoms/Button',
  component: DomainsSimpleButtonComponent,
  argTypes: props,
} as Meta;

const Template: Story<DomainsSimpleButtonComponent> = (args: DomainsSimpleButtonComponent) => ({
  component: DomainsSimpleButtonComponent,
  props: args,
});

export const DangerBig = Template.bind({});
DangerBig.args = {
  title: "clear",
  classes: "btn-danger fs-12-sofia-800 btn-app btn-app--h46--wide"
};

export const SuccessBig = Template.bind({});
SuccessBig.args = {
  title: "got it",
  classes: "btn-app--h46--wide btn-app btn-success ffs-12-sofia-800"
};

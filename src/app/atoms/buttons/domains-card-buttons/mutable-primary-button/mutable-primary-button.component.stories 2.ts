import { Meta, Story } from '@storybook/angular';
import { MutablePrimaryButtonComponent } from './mutable-primary-button.component';

const props = {
  onActive: { control: 'boolean' }
};

export default {
  title: 'Atoms/Button/Mutable Primary',
  component: MutablePrimaryButtonComponent,
  argTypes: props,
} as Meta;

const Template: Story<MutablePrimaryButtonComponent> = (args: MutablePrimaryButtonComponent) => ({
  component: MutablePrimaryButtonComponent,
  props: args,
});

export const EditOnActive = Template.bind({});
EditOnActive.args = {
  title: "Edit",
  onActive: true,
};

export const Reports = Template.bind({});
Reports.args = {
  title: "Reports",
  onActive: false,
};

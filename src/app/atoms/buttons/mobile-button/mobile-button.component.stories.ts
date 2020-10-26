import { Meta, Story } from '@storybook/angular';
import { MobileButtonComponent } from './mobile-button.component';

const props = {
  isOpen: {control: 'boolean'}
};

export default {
  title: 'Atoms/Button',
  component: MobileButtonComponent,
  argTypes: props,
} as Meta;

const Template: Story<MobileButtonComponent> = (args: MobileButtonComponent) => ({
  component: MobileButtonComponent,
  props: args,
});

export const Mobile = Template.bind({});
Mobile.args = {
  isOpen: false,
};



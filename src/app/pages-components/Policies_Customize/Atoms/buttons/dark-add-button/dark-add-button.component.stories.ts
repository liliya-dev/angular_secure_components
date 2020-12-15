import { Meta, Story } from '@storybook/angular';
import { PoliciesDarkAddButtonComponent } from './dark-add-button.component';

const props = {};

export default {
  title: 'Policies Customize/Atoms/Buttons',
  component: PoliciesDarkAddButtonComponent,
  argTypes: props,
} as Meta;

const Template: Story<PoliciesDarkAddButtonComponent> = (args: PoliciesDarkAddButtonComponent) => ({
  component: PoliciesDarkAddButtonComponent,
  props: args,
});

export const SmallDark = Template.bind({});
SmallDark.args = {};

import { Meta, Story } from '@storybook/angular';
import { DarkAddButtonComponent } from './dark-add-button.component';

const props = {};

export default {
  title: 'Atoms/Button/Add Buttons',
  component: DarkAddButtonComponent,
  argTypes: props,
} as Meta;

const Template: Story<DarkAddButtonComponent> = (args: DarkAddButtonComponent) => ({
  component: DarkAddButtonComponent,
  props: args,
});

export const SmallDark = Template.bind({});
SmallDark.args = {};

import { Meta, Story } from '@storybook/angular';
import { secondaryButtonComponent } from './secondaryButton.component';

const props = {
  backgroundColor: { control: 'color' },
  color: { control: 'color' },
  title: { control: 'text' },
};

export default {
  title: 'Atoms/Button',
  component: secondaryButtonComponent,
  argTypes: props,
} as Meta;

const Template: Story<secondaryButtonComponent> = (args: secondaryButtonComponent) => ({
  component: secondaryButtonComponent,
  props: args,
});

export const Secondary = Template.bind({});
Secondary.args = {
  title: "Filters"
};


import { action } from '@storybook/addon-actions';
import { Meta, Story } from '@storybook/angular';
import { primaryButtonComponent } from './primaryButton.component';

const props = {
  backgroundColor: { control: 'color' },
  title: { control: 'text'},
};

export default {
  title: 'Atoms/Button',
  component: primaryButtonComponent,
  argTypes: props,
} as Meta;

const Template: Story<primaryButtonComponent> = (args: primaryButtonComponent) => ({
  component: primaryButtonComponent,
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {
  title: "",
};


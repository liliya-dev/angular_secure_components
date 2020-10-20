import { Meta, Story } from '@storybook/angular';
import { lightButtonComponent } from './lightButton.component';

const props = {
  backgroundColor: { control: 'color' },
  color: { control: 'color' },
  title: { control: 'text'},
};

export default {
  title: 'Atoms/Button',
  component: lightButtonComponent,
  argTypes: props,
} as Meta;

const Template: Story<lightButtonComponent> = (args: lightButtonComponent) => ({
  component: lightButtonComponent,
  props: args,
});

export const Light = Template.bind({});
Light.args = {
  
};


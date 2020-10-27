import { Meta, Story } from '@storybook/angular';
import { largeButtonComponent } from './largeButton.component';

const props = {
  backgroundColor: { control: 'color' },
  color: { control: 'color' },
  title: { control: 'text' },
};

export default {
  title: 'Atoms/Button',
  component: largeButtonComponent,
  argTypes: props,
} as Meta;

const Template: Story<largeButtonComponent> = (args: largeButtonComponent) => ({
  component: largeButtonComponent,
  props: args,
});
  
export const Large = Template.bind({});
Large.args = {
  title: "GDPR, eprivacy",
  text: "Europe",
};


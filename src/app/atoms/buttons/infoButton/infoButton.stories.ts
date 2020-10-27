import { Meta, Story } from '@storybook/angular';
import { infoButtonComponent } from './infoButton.component';

const props = {
  backgroundColor: { control: 'color' },
  color: { control: 'color' },
  title: { control: 'text' },
};

export default {
  title: 'Atoms/Button',
  component: infoButtonComponent,
  argTypes: props,
} as Meta;

const Template: Story<infoButtonComponent> = (args: infoButtonComponent) => ({
  component: infoButtonComponent,
  props: args,
});

export const Info = Template.bind({});
Info.args = {
  title: "support",
};


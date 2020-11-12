import { Meta, Story } from '@storybook/angular';
import { lightButtonComponent } from './lightButton.component';

const props = {
  backgroundColor: { control: 'color' }
};

export default {
  title: 'Atoms/Button/Light',
  component: lightButtonComponent,
  argTypes: props,
} as Meta;

const Template: Story<lightButtonComponent> = (args: lightButtonComponent) => ({
  component: lightButtonComponent,
  props: args,
});

export const Back = Template.bind({});
Back.args = {
  srcPath: "assets/images/back-icon.png"
};

export const Plus = Template.bind({});
Plus.args = {
  srcPath: "assets/images/plus.svg"
};


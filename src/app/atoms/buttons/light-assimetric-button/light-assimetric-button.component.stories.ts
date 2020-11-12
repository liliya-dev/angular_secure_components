import { Meta, Story } from '@storybook/angular';
import { LightAssimetricButtonComponent } from './light-assimetric-button.component';

const props = {};

export default {
  title: 'Atoms/Button/Light Assimetric',
  component: LightAssimetricButtonComponent,
  argTypes: props,
} as Meta;

const Template: Story<LightAssimetricButtonComponent> = (args: LightAssimetricButtonComponent) => ({
  component: LightAssimetricButtonComponent,
  props: args,
});

export const Back = Template.bind({});
Back.args = {
  srcPath: "assets/images/back.svg"
};



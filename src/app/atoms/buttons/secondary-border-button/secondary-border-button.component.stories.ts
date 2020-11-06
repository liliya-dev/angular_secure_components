import { Meta, Story } from '@storybook/angular';
import { SecondaryBorderButtonComponent } from './secondary-border-button.component';

const props = {
  backgroundColor: { control: 'color' },
  color: { control: 'color' },
  title: { control: 'text' },
};

export default {
  title: 'Atoms/Button/Seconadary Border Button',
  component: SecondaryBorderButtonComponent,
  argTypes: props,
} as Meta;

const Template: Story<SecondaryBorderButtonComponent> = (args: SecondaryBorderButtonComponent) => ({
  component: SecondaryBorderButtonComponent,
  props: args,
});

export const ZoomIn = Template.bind({});
ZoomIn.args = {
  iconSrc: 'assets/images/zoom-in.png'
};

export const ZoomOut = Template.bind({});
ZoomOut.args = {
  iconSrc: 'assets/images/zoom-out.png'
};


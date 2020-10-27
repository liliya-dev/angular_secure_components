import { Meta, Story } from '@storybook/angular';
import { ScanAnimationComponent } from './scan-animation.component';

const props = {};

export default {
  title: 'Atoms/Animation',
  component: ScanAnimationComponent,
  argTypes: props,
} as Meta;

const Template: Story<ScanAnimationComponent> = (args: ScanAnimationComponent) => ({
  component: ScanAnimationComponent,
  props: args,
});

export const Scan = Template.bind({});
Scan.args = {};


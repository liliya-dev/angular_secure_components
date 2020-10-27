import { Meta, Story } from '@storybook/angular';
import { IconContainerComponent } from './iconContainer.component';

const props = {
  backgroundColor: { control: 'color' },
};

export default {
  title: 'Atoms/IconContainer',
  component: IconContainerComponent,
  argTypes: props,
} as Meta;

const Template: Story<IconContainerComponent> = (args: IconContainerComponent) => ({
  component: IconContainerComponent,
  props: args,
});

export const Simple = Template.bind({});
Simple.args = {};


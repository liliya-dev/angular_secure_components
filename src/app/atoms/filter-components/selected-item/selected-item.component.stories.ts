import { Meta, Story } from '@storybook/angular';
import { SelectedItemComponent } from './selected-item.component';

const props = {};

export default {
  title: 'Atoms/Filter Components/Selected Item',
  component: SelectedItemComponent,
  argTypes: props,
} as Meta;

const Template: Story<SelectedItemComponent> = (args: SelectedItemComponent) => ({
  component: SelectedItemComponent,
  props: args,
});

export const Simple = Template.bind({});
Simple.args = {
  title: 'World'
};

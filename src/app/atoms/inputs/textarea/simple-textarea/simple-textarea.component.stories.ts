import { Meta, Story } from '@storybook/angular';
import { SimpleTextareaComponent } from './simple-textarea.component';

const props = {};

export default {
  title: 'Atoms/Input/Textarea',
  component: SimpleTextareaComponent,
  argTypes: props,
} as Meta;

const Template: Story<SimpleTextareaComponent> = (args: SimpleTextareaComponent) => ({
  component: SimpleTextareaComponent,
  props: args,
});

export const Simple = Template.bind({});
Simple.args = {
  placeholderText: "Text",
};


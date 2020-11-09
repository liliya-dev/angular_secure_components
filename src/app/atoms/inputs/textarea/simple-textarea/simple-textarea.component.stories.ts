import { Meta, Story } from '@storybook/angular';
import { SimpleTextareaComponent } from './simple-textarea.component';

const props = {
  backgroundColor: { control: 'color' },
  color: { control: 'color' },
  placeholder: { control: 'text' },
};

export default {
  title: 'Atoms/Input',
  component: SimpleTextareaComponent,
  argTypes: props,
} as Meta;

const Template: Story<SimpleTextareaComponent> = (args: SimpleTextareaComponent) => ({
  component: SimpleTextareaComponent,
  props: args,
});

export const Textarea = Template.bind({});
Textarea.args = {
  placeholderText: "Text",
};


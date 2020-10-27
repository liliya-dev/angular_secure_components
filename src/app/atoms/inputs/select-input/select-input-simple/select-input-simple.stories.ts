import { CommonModule } from '@angular/common';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { SelectInputSimpleComponent } from './select-input-simple.component';
import { NgSelectModule } from '@ng-select/ng-select';

const props = {
  initialValue: { control: 'text' },
  items: { control: 'array' }
};

export default {
  title: 'Atoms/Input/Select',
  decorators: [
    moduleMetadata({
      declarations: [SelectInputSimpleComponent],
      imports: [CommonModule, NgSelectModule]
    }),
  ],
  argTypes: props,
} as Meta;

const Template: Story<SelectInputSimpleComponent> = (args: SelectInputSimpleComponent) => ({
  component: SelectInputSimpleComponent,
  props: args,
});

export const Simple = Template.bind({});
Simple.args = {
  initialValue: "This account is for:",
  items: ['My current company', 'My clients company']
};


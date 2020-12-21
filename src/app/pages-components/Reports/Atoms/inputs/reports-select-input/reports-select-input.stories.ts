import { CommonModule } from '@angular/common';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { ReportsSelectInput } from './reports-select-input.component';
import { NgSelectModule } from '@ng-select/ng-select';

const props = {
  initialValue: { control: 'text' },
  items: { control: 'array' }
};

export default {
  title: 'Reports/Atoms/Input',
  decorators: [
    moduleMetadata({
      declarations: [ReportsSelectInput],
      imports: [CommonModule, NgSelectModule]
    }),
  ],
  argTypes: props,
} as Meta;

const Template: Story<ReportsSelectInput> = (args: ReportsSelectInput) => ({
  component: ReportsSelectInput,
  props: args,
});

export const Select = Template.bind({});
Select.args = {
  title: 'select',
  id: '',
  initialValue: "This account is for:",
  items: ['My current company', 'My clients company']
};


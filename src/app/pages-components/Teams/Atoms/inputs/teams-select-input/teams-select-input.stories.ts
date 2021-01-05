import { CommonModule } from '@angular/common';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { TeamsSelectInput } from './teams-select-input.component';
import { NgSelectModule } from '@ng-select/ng-select';

const props = {
  initialValue: { control: 'text' },
  items: { control: 'array' }
};

export default {
  title: 'Teams/Atoms/Input',
  decorators: [
    moduleMetadata({
      declarations: [TeamsSelectInput],
      imports: [CommonModule, NgSelectModule]
    }),
  ],
  argTypes: props,
} as Meta;

const Template: Story<TeamsSelectInput> = (args: TeamsSelectInput) => ({
  component: TeamsSelectInput,
  props: args,
});

export const Select = Template.bind({});
Select.args = {
  id: '6',
  initialValue: "Account owner",
  items: ['Account owner', 'Account manager', 'Account user']
};


import { CommonModule } from '@angular/common';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { SelectInputSearchComponent } from './select-input-search.component';
import { NgSelectModule } from '@ng-select/ng-select';

const props = {
  initialValue: { control: 'text'},
  items: { control: 'array'}
};

export default {
  title: 'Atoms/Input/Select',
  decorators: [
    moduleMetadata({
      declarations: [SelectInputSearchComponent],
      imports: [CommonModule, NgSelectModule]
    }),
  ],
  argTypes: props,
} as Meta;

const Template: Story<SelectInputSearchComponent> = (args: SelectInputSearchComponent) => ({
  component: SelectInputSearchComponent,
  props: args,
});

export const Search = Template.bind({});
Search.args = {
  classes: "custom fs-16-sofia-300",
  placeholderText: "Search for",
  items: ['My current company', 'My clients company', 'secure privacy', 'secure privacy2', 'secure privacy3']
};

export const SearchIcon = Template.bind({});
SearchIcon.args = {
  classes: "custom-icon fs-16-sofia-300",
  placeholderText: "Search for",
  items: ['My current company', 'My clients company', 'secure privacy', 'secure privacy2', 'secure privacy3']
};


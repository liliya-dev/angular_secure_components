import { CommonModule } from '@angular/common';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { ReportsSelectInputSearchComponent } from './reports-select-input-search.component';
import { NgSelectModule } from '@ng-select/ng-select';

const props = {};

export default {
  title: 'Reports/Atoms/Input',
  decorators: [
    moduleMetadata({
      declarations: [ReportsSelectInputSearchComponent],
      imports: [CommonModule, NgSelectModule]
    }),
  ],
  argTypes: props,
} as Meta;

const Template: Story<ReportsSelectInputSearchComponent> = (args: ReportsSelectInputSearchComponent) => ({
  component: ReportsSelectInputSearchComponent,
  props: args,
});

export const SearchSelect = Template.bind({});
SearchSelect.args = {
  classes: "custom",
  placeholderText: "Search for",
  items: ['My current company', 'My clients company', 'secure privacy', 'secure privacy2', 'secure privacy3']
};

export const SearchSelectIcon = Template.bind({});
SearchSelectIcon.args = {
  classes: "custom-icon",
  placeholderText: "Search for",
  items: ['My current company', 'My clients company', 'secure privacy', 'secure privacy2', 'secure privacy3']
};


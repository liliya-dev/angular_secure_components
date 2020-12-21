import { Meta, Story } from '@storybook/angular';
import { ReportsSearchInputComponent } from './reports-search-input.component';

const props = {};

export default {
  title: 'Reports/Atoms/Input',
  component: ReportsSearchInputComponent,
  argTypes: props,
} as Meta;

const Template: Story<ReportsSearchInputComponent> = (args: ReportsSearchInputComponent) => ({
  component: ReportsSearchInputComponent,
  props: args,
});

export const Search = Template.bind({});
Search.args = {
  title: 'search',
  id: '2',
  placeholderText: "Address",
  initialValue: "All addreses",
  changeValueParentFunction: (value) => console.log('changeValueParentFunction works', value)
};


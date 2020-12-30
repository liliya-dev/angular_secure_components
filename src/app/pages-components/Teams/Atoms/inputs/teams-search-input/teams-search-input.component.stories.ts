import { Meta, Story } from '@storybook/angular';
import { TeamsSearchInputComponent } from './teams-search-input.component';

const props = {};

export default {
  title: 'Teams/Atoms/Input',
  component: TeamsSearchInputComponent,
  argTypes: props,
} as Meta;

const Template: Story<TeamsSearchInputComponent> = (args: TeamsSearchInputComponent) => ({
  component: TeamsSearchInputComponent,
  props: args,
});

export const Search = Template.bind({});
Search.args = {
  placeholderText: "enter query",
  initialValue: "",
  changeValueParentFunction: (value) => console.log('changeValueParentFunction works', value)
};

import { Meta, Story } from '@storybook/angular';
import { DomainsSearchInputComponent } from './domains-search-input.component';

const props = {};

export default {
  title: 'Domains/Atoms/Input',
  component: DomainsSearchInputComponent,
  argTypes: props,
} as Meta;

const Template: Story<DomainsSearchInputComponent> = (args: DomainsSearchInputComponent) => ({
  component: DomainsSearchInputComponent,
  props: args,
});

export const Search = Template.bind({});
Search.args = {
  placeholderText: "example.com",
  initialValue: "",
  changeValueParentFunction: (value) => console.log('changeValueParentFunction works', value)
};

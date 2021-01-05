import { Meta, Story } from '@storybook/angular';
import { TeamsInputComponent } from './teams-input.component';

const props = {
  placeholder: { control: 'text' },
};

export default {
  title: 'Teams/Atoms/Input',
  component: TeamsInputComponent,
  argTypes: props,
} as Meta;

const Template: Story<TeamsInputComponent> = (args: TeamsInputComponent) => ({
  component: TeamsInputComponent,
  props: args,
});

export const Text = Template.bind({});
Text.args = {
  placeholderText: "First Name",
  initialValue: "Secure Privacy",
  changeValueParentFunction: (value) => console.log('changeValueParentFunction works', value)
};



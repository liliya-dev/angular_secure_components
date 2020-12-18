import { Meta, Story } from '@storybook/angular';
import { DomainsFormInputComponent } from './formInput.component';

const props = {
  placeholder: { control: 'text' },
};

export default {
  title: 'Domains/Atoms/Input',
  component: DomainsFormInputComponent,
  argTypes: props,
} as Meta;

const Template: Story<DomainsFormInputComponent> = (args: DomainsFormInputComponent) => ({
  component: DomainsFormInputComponent,
  props: args,
});

export const Text = Template.bind({});
Text.args = {
  placeholderText: "First Name",
  isBold: true,
  initialValue: "Secure Privacy",
  changeValueParentFunction: (value) => console.log('changeValueParentFunction works', value)
};



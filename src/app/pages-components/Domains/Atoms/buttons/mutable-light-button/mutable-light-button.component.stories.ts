import { Meta, Story } from '@storybook/angular';
import { DomainsMutableLightButtonComponent } from './mutable-light-button.component';

const props = {};

export default {
  title: 'Domains/Atoms/Button',
  component: DomainsMutableLightButtonComponent,
  argTypes: props,
} as Meta;

const Template: Story<DomainsMutableLightButtonComponent> = (args: DomainsMutableLightButtonComponent) => ({
  component: DomainsMutableLightButtonComponent,
  props: args,
});

export const Options = Template.bind({});
Options.args = {
  title: "Options",
};

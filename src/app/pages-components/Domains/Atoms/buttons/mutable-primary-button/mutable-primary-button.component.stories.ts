import { Meta, Story } from '@storybook/angular';
import { DomainsMutablePrimaryButtonComponent } from './mutable-primary-button.component';

const props = {
  onActive: { control: 'boolean' }
};

export default {
  title: 'Domains/Atoms/Button/Mutable Primary',
  component: DomainsMutablePrimaryButtonComponent,
  argTypes: props,
} as Meta;

const Template: Story<DomainsMutablePrimaryButtonComponent> = (args: DomainsMutablePrimaryButtonComponent) => ({
  component: DomainsMutablePrimaryButtonComponent,
  props: args,
});

export const Edit = Template.bind({});
Edit.args = {
  title: "Edit",
};

export const Reports = Template.bind({});
Reports.args = {
  title: "Reports",
};

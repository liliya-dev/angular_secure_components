import { Meta, Story } from '@storybook/angular';
import { TeamsMutablePrimaryButtonComponent } from './teams-mutable-primary-button.component';

const props = {
  onActive: { control: 'boolean' }
};

export default {
  title: 'Teams/Atoms/Button',
  component: TeamsMutablePrimaryButtonComponent,
  argTypes: props,
} as Meta;

const Template: Story<TeamsMutablePrimaryButtonComponent> = (args: TeamsMutablePrimaryButtonComponent) => ({
  component: TeamsMutablePrimaryButtonComponent,
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {
  title: "Edit",
};


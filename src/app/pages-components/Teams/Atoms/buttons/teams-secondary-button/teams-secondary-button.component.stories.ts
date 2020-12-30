import { Meta, Story } from '@storybook/angular';
import { TeamsSecondaryButtonComponent } from './teams-secondary-button.component';

const props = {
  onActive: { control: 'boolean' }
};

export default {
  title: 'Teams/Atoms/Button',
  component: TeamsSecondaryButtonComponent,
  argTypes: props,
} as Meta;

const Template: Story<TeamsSecondaryButtonComponent> = (args: TeamsSecondaryButtonComponent) => ({
  component: TeamsSecondaryButtonComponent,
  props: args,
});

export const Secondary = Template.bind({});
Secondary.args = {
  title: "audit log",
};

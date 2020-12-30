import { Meta, Story } from '@storybook/angular';
import { TeamsTipsComponent } from './teams-tips.component';

const props = {};

export default {
  title: 'Teams/Atoms',
  component: TeamsTipsComponent,
  argTypes: props,
} as Meta;

const Template: Story<TeamsTipsComponent> = (args: TeamsTipsComponent) => ({
  component: TeamsTipsComponent,
  props: args,
});

export const Tips = Template.bind({});
Tips.args = {
  title: 'Account owner',
  text: 'Has access to all domains and all settings.'
};


import { Meta, Story } from '@storybook/angular';
import { TeamsSimpleButtonComponent } from './teams-simple-button.component';

const props = {
  backgroundColor: { control: 'color' },
  color: { control: 'color' },
  title: { control: 'text' },
};

export default {
  title: 'Teams/Atoms/Button',
  component: TeamsSimpleButtonComponent,
  argTypes: props,
} as Meta;

const Template: Story<TeamsSimpleButtonComponent> = (args: TeamsSimpleButtonComponent) => ({
  component: TeamsSimpleButtonComponent,
  props: args,
});

export const SuccessAsimetric = Template.bind({});
SuccessAsimetric.args = {
  title: "add new user",
  classes: "btn-app--asimetric btn-success-asimetric fs-16-sofia-800"
};

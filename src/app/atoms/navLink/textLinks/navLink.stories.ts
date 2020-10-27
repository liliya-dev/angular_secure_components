import { Meta, Story } from '@storybook/angular';
import { navLinkComponent } from './navLink.component';

const props = {
  title: { control: 'text' },
  isActive: { control: 'boolean' }
};

export default {
  title: 'Atoms/NavLink',
  component: navLinkComponent,
  argTypes: props,
} as Meta;

const Template: Story<navLinkComponent> = (args: navLinkComponent) => ({
  component: navLinkComponent,
  props: args,
});

export const Main = Template.bind({});
Main.args = {
  title: "dashboard",
  classes: "nav-link-main fs-16-sofia-500",
  isActive: false
};

export const Secondary = Template.bind({});
Secondary.args = {
  title: "Opt-in vs Opt-out",
  classes: "nav-link-secondary fs-12-gramm-400",
  isActive: false
};

export const Highlited = Template.bind({});
Highlited.args = {
  title: "today",
  classes: "nav-link-secondary nav-link-highlited fs-12-gramm-400",
  isActive: false
};


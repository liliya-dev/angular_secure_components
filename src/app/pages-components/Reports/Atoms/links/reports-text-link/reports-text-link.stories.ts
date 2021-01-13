import { Meta, Story } from '@storybook/angular';
import { ReportsTextLinkComponent } from './reports-text-link.component';

const props = {
  title: { control: 'text' },
  isActive: { control: 'boolean' }
};

export default {
  title: 'Reports/Atoms/Links',
  component: ReportsTextLinkComponent,
  argTypes: props,
} as Meta;

const Template: Story<ReportsTextLinkComponent> = (args: ReportsTextLinkComponent) => ({
  component: ReportsTextLinkComponent,
  props: args,
});

export const Static = Template.bind({});
Static.args = {
  title: "Opt-in vs Opt-out",
  classes: "nav-link-secondary",
  isActive: false
};

export const Highlited = Template.bind({});
Highlited.args = {
  title: "today",
  classes: "nav-link-secondary nav-link-highlited",
  isActive: false
};

export const Thin = Template.bind({});
Thin.args = {
  title: "dashboard",
  classes: "nav-link-main",
  isActive: false
};


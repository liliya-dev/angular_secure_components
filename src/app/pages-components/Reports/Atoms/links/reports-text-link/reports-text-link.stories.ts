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
  classes: "nav-link-secondary fs-12-gramm-400",
  isActive: false
};

export const Highlited = Template.bind({});
Highlited.args = {
  title: "today",
  classes: "nav-link-secondary nav-link-highlited fs-12-gramm-400",
  isActive: false
};

export const Thin = Template.bind({});
Thin.args = {
  title: "dashboard",
  classes: "nav-link-main fs-16-sofia-500",
  isActive: false
};


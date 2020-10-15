import { action } from '@storybook/addon-actions';
import { Meta, Story } from '@storybook/angular';
import { navLinkComponent } from './navLink.component';

const props = {
  title: { control: 'text' },
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

  export const SideBar = Template.bind({});
  SideBar.args = {
    title: "Opt-in vs Opt-out",
    classes: "nav-link-sidebar fs-12-gramm-400 nav-link"
  };

  export const Main = Template.bind({});
  Main.args = {
    title: "dashboard",
    classes: "nav-link-main fs-16-sofia-500"
  };


import { CommonModule } from '@angular/common';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { navLinkComponent } from '../../../atoms/navLink/textLinks/navLink.component';
import { MainNavigationMenuComponent } from './main-navigation-menu.component';

const props = {
  backgroundColor: { control: 'color' },
  items: { control: 'array' }
};

export default {
  title: 'Molecules/Menu',
  decorators: [
    moduleMetadata({
      declarations: [MainNavigationMenuComponent, navLinkComponent],
      imports: [CommonModule],
    }),
  ],
  argTypes: props,
} as Meta;

const Template: Story<MainNavigationMenuComponent> = (args: MainNavigationMenuComponent) => ({
  component: MainNavigationMenuComponent,
  props: args,
});

export const Navigation = Template.bind({});
Navigation.args = {
  items: ['reports', 'domains', 'users', 'account', 'request portal']
};


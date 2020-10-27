import { CommonModule } from '@angular/common';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { IconLinksComponent } from '../../../atoms/navLink/icon-links/icon-links.component';
import { MobileMainNavigationMenuComponent } from './mobile-main-navigation-menu.component';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { HttpClientModule } from '@angular/common/http';

const props = {
  items: { control: 'object' }
};

export default {
  title: 'Molecules/Menu',
  decorators: [
    moduleMetadata({
      declarations: [MobileMainNavigationMenuComponent, IconLinksComponent],
      imports: [CommonModule, HttpClientModule, AngularSvgIconModule.forRoot()],
    }),
  ],
  argTypes: props,
} as Meta;

const Template: Story<MobileMainNavigationMenuComponent> = (args: MobileMainNavigationMenuComponent) => ({
  component: MobileMainNavigationMenuComponent,
  props: args,
});

export const MobileNavigation = Template.bind({});
MobileNavigation.args = {
  items: [
    { title: 'Reports', svgPath: 'assets/images/menu/Reports.svg', isActive: false },
    { title: 'Domains', svgPath: 'assets/images/menu/Domains.svg', isActive: false },
    { title: 'Account', svgPath: 'assets/images/menu/Account.svg', isActive: false },
    { title: 'Options', svgPath: 'assets/images/menu/Options.svg', isActive: false },
  ]
};
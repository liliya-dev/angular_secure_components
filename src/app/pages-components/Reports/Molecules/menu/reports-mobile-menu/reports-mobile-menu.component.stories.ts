import { CommonModule } from '@angular/common';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { ReportsIconLinkComponent } from '../../../Atoms/links/reports-icon-links/reports-icon-link.component';
import { ReportsMobileMenuComponent } from './reports-mobile-menu.component';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { HttpClientModule } from '@angular/common/http';

const props = {
  items: { control: 'object' }
};

export default {
  title: 'Reports/Molecules/Menu',
  decorators: [
    moduleMetadata({
      declarations: [ReportsMobileMenuComponent, ReportsIconLinkComponent],
      imports: [CommonModule, HttpClientModule, AngularSvgIconModule.forRoot()],
    }),
  ],
  argTypes: props,
} as Meta;

const Template: Story<ReportsMobileMenuComponent> = (args: ReportsMobileMenuComponent) => ({
  component: ReportsMobileMenuComponent,
  props: args,
});

export const Mobile = Template.bind({});
Mobile.args = {
  items: [
    { title: 'Reports', svgPath: 'assets/images/menu/Reports.svg', isActive: false },
    { title: 'Domains', svgPath: 'assets/images/menu/Domains.svg', isActive: false },
    { title: 'Account', svgPath: 'assets/images/menu/Account.svg', isActive: false },
    { title: 'Options', svgPath: 'assets/images/menu/Options.svg', isActive: false },
  ]
};
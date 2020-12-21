import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { ReportsIconLinkComponent } from './reports-icon-link.component';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

const props = {
  title: { control: 'text' },
  isActive: { control: 'boolean' }
};

export default {
  title: 'Reports/Atoms/Links',
  decorators: [
    moduleMetadata({
      declarations: [ReportsIconLinkComponent],
      imports: [CommonModule, HttpClientModule, AngularSvgIconModule.forRoot()]
    }),
  ],
  argTypes: props,
} as Meta;

const Template: Story<ReportsIconLinkComponent> = (args: ReportsIconLinkComponent) => ({
  component: ReportsIconLinkComponent,
  props: args,
});

export const Icon = Template.bind({});
Icon.args = {
  title: 'Domains',
  isActive: false,
  svgPath: 'assets/images/menu/Domains.svg'
};

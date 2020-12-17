import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { DomainsSvgButtonComponent } from './domains-svg-button.component';

const props = {};

export default {
  title: 'Domains/Atoms/Button',
  decorators: [
    moduleMetadata({
      declarations: [DomainsSvgButtonComponent],
      imports: [CommonModule, HttpClientModule, AngularSvgIconModule.forRoot()]
    }),
  ],
  argTypes: props,
} as Meta;

const Template: Story<DomainsSvgButtonComponent> = (args: DomainsSvgButtonComponent) => ({
  component: DomainsSvgButtonComponent,
  props: args,
});

export const Save = Template.bind({});
Save.args = {
  svgPath: 'assets/images/download.svg',
  borderColor: '#D0DAEB',
  bgColor: 'transparent',
  bgColorHover: '#D0DAEB',
  svgColor: 'url(#paint0_linear)',
  isStroke: false,
};

export const Delete = Template.bind({});
Delete.args = {
  svgPath: 'assets/images/basket.svg',
  borderColor: '',
  bgColor: 'rgb(234, 45, 45, 0.1)',
  bgColorHover: 'rgb(234, 45, 45, 0.3)',
  svgColor: 'rgb(234, 45, 45, 1)',
  isStroke: true,
};

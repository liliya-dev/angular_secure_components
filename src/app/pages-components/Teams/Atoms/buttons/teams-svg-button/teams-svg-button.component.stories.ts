import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { TeamsSvgButtonComponent } from './teams-svg-button.component';

const props = {};

export default {
  title: 'Teams/Atoms/Button',
  decorators: [
    moduleMetadata({
      declarations: [TeamsSvgButtonComponent],
      imports: [CommonModule, HttpClientModule, AngularSvgIconModule.forRoot()]
    }),
  ],
  argTypes: props,
} as Meta;

const Template: Story<TeamsSvgButtonComponent> = (args: TeamsSvgButtonComponent) => ({
  component: TeamsSvgButtonComponent,
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

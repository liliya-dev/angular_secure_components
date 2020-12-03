import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { MutableGradientIconButtonComponent } from './mutable-gradient-icon-button.component';

const props = {};

export default {
  title: 'Atoms/Button/Mutable Gradient Icon',
  decorators: [
    moduleMetadata({
      declarations: [MutableGradientIconButtonComponent],
      imports: [CommonModule, HttpClientModule, AngularSvgIconModule.forRoot()]
    }),
  ],
  argTypes: props,
} as Meta;

const Template: Story<MutableGradientIconButtonComponent> = (args: MutableGradientIconButtonComponent) => ({
  component: MutableGradientIconButtonComponent,
  props: args,
});

export const Gradient = Template.bind({});
Gradient.args = {
  svgPath: 'assets/images/copy.svg',
  onActive: true,
};


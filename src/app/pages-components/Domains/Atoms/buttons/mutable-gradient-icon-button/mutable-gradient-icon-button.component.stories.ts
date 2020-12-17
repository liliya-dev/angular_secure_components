import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { DomainsMutableGradientIconButtonComponent } from './mutable-gradient-icon-button.component';

const props = {};

export default {
  title: 'Domains/Atoms/Button',
  decorators: [
    moduleMetadata({
      declarations: [DomainsMutableGradientIconButtonComponent],
      imports: [CommonModule, HttpClientModule, AngularSvgIconModule.forRoot()]
    }),
  ],
  argTypes: props,
} as Meta;

const Template: Story<DomainsMutableGradientIconButtonComponent> = (args: DomainsMutableGradientIconButtonComponent) => ({
  component: DomainsMutableGradientIconButtonComponent,
  props: args,
});

export const MutableGradientIcon = Template.bind({});
MutableGradientIcon.args = {
  svgPath: 'assets/images/copy.svg',
};


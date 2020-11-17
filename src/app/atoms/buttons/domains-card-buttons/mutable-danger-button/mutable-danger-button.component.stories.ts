import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { MutableDangerButtonComponent } from './mutable-danger-button.component';

const props = {};

export default {
  title: 'Atoms/Button/Mutable Danger',
  decorators: [
    moduleMetadata({
      declarations: [MutableDangerButtonComponent],
      imports: [CommonModule, HttpClientModule, AngularSvgIconModule.forRoot()]
    }),
  ],
  argTypes: props,
} as Meta;

const Template: Story<MutableDangerButtonComponent> = (args: MutableDangerButtonComponent) => ({
  component: MutableDangerButtonComponent,
  props: args,
});

export const Danger = Template.bind({});
Danger.args = {
  svgPath: 'assets/images/basket.svg',
  onActive: true,
};


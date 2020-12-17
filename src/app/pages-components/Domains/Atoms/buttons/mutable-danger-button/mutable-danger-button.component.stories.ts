import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { DomainsMutableDangerButtonComponent } from './mutable-danger-button.component';

const props = {};

export default {
  title: 'Domains/Atoms/Button',
  decorators: [
    moduleMetadata({
      declarations: [DomainsMutableDangerButtonComponent],
      imports: [CommonModule, HttpClientModule, AngularSvgIconModule.forRoot()]
    }),
  ],
  argTypes: props,
} as Meta;

const Template: Story<DomainsMutableDangerButtonComponent> = (args: DomainsMutableDangerButtonComponent) => ({
  component: DomainsMutableDangerButtonComponent,
  props: args,
});

export const MutableDanger = Template.bind({});
MutableDanger.args = {
  svgPath: 'assets/images/basket.svg',
};


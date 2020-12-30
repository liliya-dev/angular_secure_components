import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { TeamsMutableGradientIconButtonComponent } from './teams-mutable-gradient-icon-button.component';

const props = {};

export default {
  title: 'Teams/Atoms/Button',
  decorators: [
    moduleMetadata({
      declarations: [TeamsMutableGradientIconButtonComponent],
      imports: [CommonModule, HttpClientModule, AngularSvgIconModule.forRoot()]
    }),
  ],
  argTypes: props,
} as Meta;

const Template: Story<TeamsMutableGradientIconButtonComponent> = (args: TeamsMutableGradientIconButtonComponent) => ({
  component: TeamsMutableGradientIconButtonComponent,
  props: args,
});

export const MutableGradientIcon = Template.bind({});
MutableGradientIcon.args = {
  svgPath: 'assets/images/copy.svg',
};


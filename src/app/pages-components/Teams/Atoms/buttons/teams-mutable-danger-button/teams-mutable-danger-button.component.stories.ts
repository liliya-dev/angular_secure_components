import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { TeamsMutableDangerButtonComponent } from './teams-mutable-danger-button.component';

const props = {};

export default {
  title: 'Teams/Atoms/Button',
  decorators: [
    moduleMetadata({
      declarations: [TeamsMutableDangerButtonComponent],
      imports: [CommonModule, HttpClientModule, AngularSvgIconModule.forRoot()]
    }),
  ],
  argTypes: props,
} as Meta;

const Template: Story<TeamsMutableDangerButtonComponent> = (args: TeamsMutableDangerButtonComponent
) => ({
  component: TeamsMutableDangerButtonComponent
,
  props: args,
});

export const MutableDanger = Template.bind({});
MutableDanger.args = {
  svgPath: 'assets/images/basket.svg',
};


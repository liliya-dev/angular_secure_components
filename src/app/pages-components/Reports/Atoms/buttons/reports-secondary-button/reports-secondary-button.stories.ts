import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { ReportsSecondaryButtonComponent } from './reports-secondary-button.component';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

const props = {};

export default {
  title: 'Reports/Atoms/Button',
  decorators: [
    moduleMetadata({
      declarations: [ReportsSecondaryButtonComponent],
      imports: [CommonModule, HttpClientModule, AngularSvgIconModule.forRoot()]
    }),
  ],
  argTypes: props,
} as Meta;

const Template: Story<ReportsSecondaryButtonComponent> = (args: ReportsSecondaryButtonComponent) => ({
  component: ReportsSecondaryButtonComponent,
  props: args,
});

export const Secondary = Template.bind({});
Secondary.args = {
  title: "Filter",
  srcPath: 'assets/images/filter.svg'
};


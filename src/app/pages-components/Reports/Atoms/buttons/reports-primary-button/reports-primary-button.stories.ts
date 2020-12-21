import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { ReportsPrimaryButtonComponent } from './reports-primary-button.component';

const props = {};

export default {
  title: 'Reports/Atoms/Button',
  decorators: [
    moduleMetadata({
      declarations: [ReportsPrimaryButtonComponent],
      imports: [CommonModule, HttpClientModule, AngularSvgIconModule.forRoot()]
    }),
  ],
  argTypes: props,
} as Meta;

const Template: Story<ReportsPrimaryButtonComponent> = (args: ReportsPrimaryButtonComponent) => ({
  component: ReportsPrimaryButtonComponent,
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {
  title: 'Export',
  svgPath: 'assets/images/export.svg'
};


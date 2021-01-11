import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { primaryButtonComponent } from './primaryButton.component';

const props = {
  backgroundColor: { control: 'color' },
  title: { control: 'text' },
};

export default {
  title: 'Atoms/Button',
  decorators: [
    moduleMetadata({
      declarations: [primaryButtonComponent],
      imports: [CommonModule, HttpClientModule, AngularSvgIconModule.forRoot()]
    }),
  ],
  argTypes: props,
} as Meta;

const Template: Story<primaryButtonComponent> = (args: primaryButtonComponent) => ({
  component: primaryButtonComponent,
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {
  title: 'cccc',
  svgPath: 'assets/images/export.svg'
};


import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { secondaryButtonComponent } from './secondaryButton.component';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

const props = {
  backgroundColor: { control: 'color' },
  color: { control: 'color' },
  title: { control: 'text' },
};

export default {
  title: 'Atoms/Button',
  decorators: [
    moduleMetadata({
      declarations: [secondaryButtonComponent],
      imports: [CommonModule, HttpClientModule, AngularSvgIconModule.forRoot()]
    }),
  ],
  argTypes: props,
} as Meta;

const Template: Story<secondaryButtonComponent> = (args: secondaryButtonComponent) => ({
  component: secondaryButtonComponent,
  props: args,
});

export const Secondary = Template.bind({});
Secondary.args = {
  title: "Filters",
  srcPath: 'assets/images/filter.svg'
};


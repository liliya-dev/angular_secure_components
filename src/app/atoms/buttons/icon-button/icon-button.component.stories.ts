import { CommonModule } from '@angular/common';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { IconButtonComponent } from './icon-button.component';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { HttpClientModule } from '@angular/common/http';


const props = {
  svgPath: { control: 'text' },
  isActive: { control: 'boolean' },
  title: { control: 'text'},
};

export default {
  title: 'Atoms/Button',
  decorators: [
    moduleMetadata({
      declarations: [IconButtonComponent],
      imports: [CommonModule, HttpClientModule, AngularSvgIconModule.forRoot()]
    }),
  ],
  argTypes: props,
} as Meta;

const Template: Story<IconButtonComponent> = (args: IconButtonComponent) => ({
  component: IconButtonComponent,
  props: args,
});

export const Icon = Template.bind({});
Icon.args = {
  title: 'Domains',
  isActive: false,
  svgPath: 'assets/images/menu/Domains.svg'
};



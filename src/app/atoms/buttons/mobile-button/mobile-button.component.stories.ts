import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { MobileButtonComponent } from './mobile-button.component';

const props = {
  isOpen: { control: 'boolean' }
};

export default {
  title: 'Atoms/Button',
  decorators: [
    moduleMetadata({
      declarations: [MobileButtonComponent],
      imports: [CommonModule, HttpClientModule, AngularSvgIconModule.forRoot()]
    }),
  ],
  argTypes: props,
} as Meta;


const Template: Story<MobileButtonComponent> = (args: MobileButtonComponent) => ({
  component: MobileButtonComponent,
  props: args,
});

export const Mobile = Template.bind({});
Mobile.args = {
  isOpen: false,
  svgPathActive: 'assets/images/closeMobileMenu.svg',
  svgPathNonActive: 'assets/images/mobileMenu.svg'
};



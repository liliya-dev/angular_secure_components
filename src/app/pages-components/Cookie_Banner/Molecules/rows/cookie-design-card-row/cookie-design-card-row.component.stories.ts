import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { CookieDesignCardRowComponent } from './cookie-design-card-row.component';
import { CookieDesignCardComponent } from '../../../Atoms/cookie-design-card/cookie-design-card.component';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

const props = {};

export default {
  title: 'Cookie Banner/Moleules/Card rows',
  decorators: [
    moduleMetadata({
      declarations: [
        CookieDesignCardRowComponent,
        CookieDesignCardComponent
      ],
      imports: [CommonModule, HttpClientModule, AngularSvgIconModule.forRoot()],
    }),
  ],
  argTypes: props,
} as Meta;

const Template: Story<CookieDesignCardRowComponent> = (args: CookieDesignCardRowComponent) => ({
  component: CookieDesignCardRowComponent,
  props: args,
});

export const Design = Template.bind({});
Design.args = {
  initialSelectedId: 'second',
  items: [
    { imgSrc: 'assets/images/cookie-banner/image1.svg', id: 'first' },
    { imgSrc: 'assets/images/cookie-banner/image2.svg', id: 'second' },
    { imgSrc: 'assets/images/cookie-banner/image3.svg', id: 'third' },
    { imgSrc: 'assets/images/cookie-banner/image3.svg', id: 'fourth' },
  ]
};
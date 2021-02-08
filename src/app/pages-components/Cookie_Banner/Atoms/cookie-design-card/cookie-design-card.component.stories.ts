import { Meta, Story } from '@storybook/angular';
import { CookieDesignCardComponent } from './cookie-design-card.component';

const props = {
  title: { control: 'text' },
};

export default {
  title: 'Cookie Banner/Atoms/Design Cards',
  component: CookieDesignCardComponent,
  argTypes: props,
} as Meta;

const Template: Story<CookieDesignCardComponent> = (args: CookieDesignCardComponent) => ({
  component: CookieDesignCardComponent,
  props: args,
});

export const First = Template.bind({});
First.args = {
  id: 'first',
  isSelected: true,
  imgSrc: 'assets/images/cookie-banner/image1.svg'
};

export const Second = Template.bind({});
Second.args = {
  id: 'second',
  isSelected: true,
  imgSrc: 'assets/images/cookie-banner/image2.svg'
};

export const Third = Template.bind({});
Third.args = {
  id: 'third',
  isSelected: true,
  imgSrc: 'assets/images/cookie-banner/image3.svg'
};

export const Add = Template.bind({});
Add.args = {
  isSelected: false,
};

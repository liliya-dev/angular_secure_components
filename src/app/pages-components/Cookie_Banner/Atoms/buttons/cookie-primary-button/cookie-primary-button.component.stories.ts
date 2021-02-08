import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { CookiePrimaryButtonComponent } from './cookie-primary-button.component';

const props = {};

export default {
  title: 'Cookie Banner/Atoms/Buttons',
  decorators: [
    moduleMetadata({
      declarations: [
        CookiePrimaryButtonComponent
      ],
      imports: [],
    }),
  ],
  argTypes: props,
} as Meta;

const Template: Story<CookiePrimaryButtonComponent> = (args: CookiePrimaryButtonComponent) => ({
  component: CookiePrimaryButtonComponent,
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {
  title: 'Save'
};
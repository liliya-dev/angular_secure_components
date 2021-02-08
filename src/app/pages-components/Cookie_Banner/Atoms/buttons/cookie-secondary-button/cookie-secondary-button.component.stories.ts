import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { CookieSecondaryButtonComponent } from './cookie-secondary-button.component';

const props = {};

export default {
  title: 'Cookie Banner/Atoms/Buttons',
  decorators: [
    moduleMetadata({
      declarations: [
        CookieSecondaryButtonComponent
      ],
      imports: [],
    }),
  ],
  argTypes: props,
} as Meta;

const Template: Story<CookieSecondaryButtonComponent> = (args: CookieSecondaryButtonComponent) => ({
  component: CookieSecondaryButtonComponent,
  props: args,
});

export const Secondary = Template.bind({});
Secondary.args = {
  title: 'close'
};
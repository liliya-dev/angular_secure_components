import { Meta, Story } from '@storybook/angular';
import { CookieTitleComponent } from './cookie-title.component';

const props = {
  title: { control: 'text' },
};

export default {
  title: 'Cookie Banner/Atoms',
  component: CookieTitleComponent,
  argTypes: props,
} as Meta;

const Template: Story<CookieTitleComponent> = (args: CookieTitleComponent) => ({
  component: CookieTitleComponent,
  props: args,
});

export const Title = Template.bind({});
Title.args = {
  title: "Layouts",
};
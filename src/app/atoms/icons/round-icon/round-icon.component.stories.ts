import { Meta, Story } from '@storybook/angular';
import { RoundIconComponent } from './round-icon.component';

const props = {};

export default {
  title: 'Atoms/Icon',
  component: RoundIconComponent,
  argTypes: props,
} as Meta;

const Template: Story<RoundIconComponent> = (args: RoundIconComponent) => ({
  component: RoundIconComponent,
  props: args,
});

export const Positive = Template.bind({});
Positive.args = {
  classes: "app-round-icon app-round-icon__positive"
};

export const Negative = Template.bind({});
Negative.args = {
  classes: "app-round-icon app-round-icon__negative"
};

export const withBoldText = Template.bind({});
withBoldText.args = {
  classes: "app-round-icon app-round-icon__positive",
  boldText: "Remove use of vendors with low rating"
};

export const withBoldTextAndLink = Template.bind({});
withBoldTextAndLink.args = {
  classes: "app-round-icon app-round-icon__positive",
  boldText: "Remove use of vendors with low rating",
  linkText: 'Learn more',
  link: '#'
};



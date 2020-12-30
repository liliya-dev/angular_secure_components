import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { TeamsCheckboxMutableGradientComponent } from './teams-checkbox-mutable-gradient.component';

const props = {
  isChecked: { control: 'boolean' },
  onActive: { control: 'boolean' },
};

export default {
  title: 'Teams/Atoms/Input',
  decorators: [
    moduleMetadata({
      declarations: [TeamsCheckboxMutableGradientComponent],
      imports: []
    }),
  ],
  argTypes: props,
} as Meta;

const Template: Story<TeamsCheckboxMutableGradientComponent> = (args: TeamsCheckboxMutableGradientComponent) => ({
  component: TeamsCheckboxMutableGradientComponent,
  props: args,
});

export const CheckboxOnActiveCard = Template.bind({});
CheckboxOnActiveCard.args = {
  onActive: true,
  isChecked: true,
};

export const CheckboxOnInactiveCard = Template.bind({});
CheckboxOnInactiveCard.args = {
  onActive: false,
  isChecked: true,
};

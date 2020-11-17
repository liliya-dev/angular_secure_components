import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { CheckboxMutableGradientComponent } from './checkbox-mutable-gradient.component';

const props = {
  isChecked: { control: 'boolean' },
  onActive: { control: 'boolean' },
};

export default {
  title: 'Atoms/Input/Checkbox',
  decorators: [
    moduleMetadata({
      declarations: [CheckboxMutableGradientComponent],
      imports: []
    }),
  ],
  argTypes: props,
} as Meta;

const Template: Story<CheckboxMutableGradientComponent> = (args: CheckboxMutableGradientComponent) => ({
  component: CheckboxMutableGradientComponent,
  props: args,
});

export const Gradient = Template.bind({});
Gradient.args = {
  onActive: true,
  isChecked: true,
};

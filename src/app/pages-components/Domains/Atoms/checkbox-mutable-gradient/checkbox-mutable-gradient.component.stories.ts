import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { DomainsCheckboxMutableGradientComponent } from './checkbox-mutable-gradient.component';

const props = {
  isChecked: { control: 'boolean' },
  onActive: { control: 'boolean' },
};

export default {
  title: 'Domains/Atoms/Input',
  decorators: [
    moduleMetadata({
      declarations: [DomainsCheckboxMutableGradientComponent],
      imports: []
    }),
  ],
  argTypes: props,
} as Meta;

const Template: Story<DomainsCheckboxMutableGradientComponent> = (args: DomainsCheckboxMutableGradientComponent) => ({
  component: DomainsCheckboxMutableGradientComponent,
  props: args,
});

export const Checkbox = Template.bind({});
Checkbox.args = {
  onActive: false,
  isChecked: true,
};

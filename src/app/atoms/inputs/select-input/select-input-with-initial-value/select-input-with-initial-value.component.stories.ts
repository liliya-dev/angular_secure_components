import { CommonModule } from '@angular/common';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { SelectInputWithInitialValueComponent } from './select-input-with-initial-value.component';
import { NgSelectModule } from '@ng-select/ng-select';

const props = {
  initialValue: { control: 'text' },
  items: { control: 'array' }
};

export default {
  title: 'Atoms/Input/Select',
  decorators: [
    moduleMetadata({
      declarations: [SelectInputWithInitialValueComponent],
      imports: [CommonModule, NgSelectModule]
    }),
  ],
  argTypes: props,
} as Meta;

const Template: Story<SelectInputWithInitialValueComponent> = (args: SelectInputWithInitialValueComponent) => ({
  component: SelectInputWithInitialValueComponent,
  props: args,
});

export const WithInitialValue = Template.bind({});
WithInitialValue.args = {
  items: ['gdpr', 'ccpa', 'lgpd']
};

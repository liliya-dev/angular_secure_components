import { CommonModule } from '@angular/common';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { SelectInputWithInitialValueComponent } from './select-input-with-initial-value.component';
import { NgSelectModule } from '@ng-select/ng-select';

const props = {};

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
  items: ['gdpr', 'ccpa', 'lgpd'],
};

export const ChoosePosition= Template.bind({});
ChoosePosition.args = {
  items: ['Left', 'Center', 'Right'],
  imagesPaths: ['assets/images/positions/position-right.png', 'assets/images/positions/position-center.png', 'assets/images/positions/position-left.png']
};

export const ChooseShape = Template.bind({});
ChooseShape.args = {
  items: ['Flat', 'Fillet Corner', 'Round'],
  imagesPaths: ['assets/images/button-types/corners.png', 'assets/images/button-types/light-round.png', 'assets/images/button-types/round.png']
};

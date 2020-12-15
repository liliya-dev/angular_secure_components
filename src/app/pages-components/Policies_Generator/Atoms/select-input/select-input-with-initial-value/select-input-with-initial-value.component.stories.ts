import { CommonModule } from '@angular/common';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { PoliciesSelectInputWithInitialValueComponent } from './select-input-with-initial-value.component';
import { NgSelectModule } from '@ng-select/ng-select';

const props = {};

export default {
  title: 'Policies Generator/Atoms/Select Inputs',
  decorators: [
    moduleMetadata({
      declarations: [PoliciesSelectInputWithInitialValueComponent],
      imports: [CommonModule, NgSelectModule]
    }),
  ],
  argTypes: props,
} as Meta;

const Template: Story<PoliciesSelectInputWithInitialValueComponent> = (args: PoliciesSelectInputWithInitialValueComponent) => ({
  component: PoliciesSelectInputWithInitialValueComponent,
  props: args,
});

export const ChooseLanguage = Template.bind({});
ChooseLanguage.args = {
  items: ['English', 'Chinese', 'Danish', 'Dutch', 'Franch', 'german', 'Italian', 'Portuguese', 'Swedish', 'Thai'],
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

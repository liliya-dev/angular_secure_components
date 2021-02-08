import { CommonModule } from '@angular/common';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { CookieSelectInputComponent } from './cookie-select-input.component';
import { NgSelectModule } from '@ng-select/ng-select';

const props = {};

export default {
  title: 'Cookie Banner/Atoms/Select Inputs',
  decorators: [
    moduleMetadata({
      declarations: [CookieSelectInputComponent],
      imports: [CommonModule, NgSelectModule]
    }),
  ],
  argTypes: props,
} as Meta;

const Template: Story<CookieSelectInputComponent> = (args: CookieSelectInputComponent) => ({
  component: CookieSelectInputComponent,
  props: args,
});

export const ChooseShape = Template.bind({});
ChooseShape.args = {
  items: ['Sharp', 'Sharp corners', 'Rounded corners'],
  imagesPaths: ['assets/images/button-types/corners.png', 'assets/images/button-types/light-round.png', 'assets/images/button-types/round.png']
};

import { CommonModule } from '@angular/common';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { CardComponent } from '../../../atoms/card/card.component';
import { FormScreenThirdComponent } from './form-screen-third.component';

const props = {};

export default {
  title: 'Molecules/Form Screen',
  decorators: [
    moduleMetadata({
      declarations: [FormScreenThirdComponent, CardComponent],
      imports: [CommonModule],
    }),
  ],
  argTypes: props,
} as Meta;

const Template: Story<FormScreenThirdComponent> = (args: FormScreenThirdComponent) => ({
  component: FormScreenThirdComponent,
  props: args,
});

export const Third = Template.bind({});
Third.args = {};


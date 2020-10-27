import { CommonModule } from '@angular/common';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { formInputComponent } from '../../../atoms/inputs/formInput/formInput.component';
import { FormScreenSecondComponent } from './form-screen-second.component';

const props = {};

export default {
  title: 'Molecules/Form Screen',
  decorators: [
    moduleMetadata({
      declarations: [FormScreenSecondComponent, formInputComponent],
      imports: [CommonModule],
    }),
  ],
  argTypes: props,
} as Meta;

const Template: Story<FormScreenSecondComponent> = (args: FormScreenSecondComponent) => ({
  component: FormScreenSecondComponent,
  props: args,
});

export const Second = Template.bind({});
Second.args = {};


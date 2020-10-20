import { CommonModule } from '@angular/common';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { formInputComponent } from '../../../atoms/inputs/formInput/formInput.component';
import { FormScreenFirstComponent } from './form-screen-first.component';

const props = {
};

export default {
  title: 'Molecules/Form Screen',
  decorators: [
    moduleMetadata({
      declarations: [FormScreenFirstComponent, formInputComponent],
      imports: [CommonModule],
    }),
  ],
  argTypes: props,
} as Meta;

const Template: Story<FormScreenFirstComponent> = (args: FormScreenFirstComponent) => ({
  component: FormScreenFirstComponent,
  props: args,
});

export const First = Template.bind({});
First.args = {
};


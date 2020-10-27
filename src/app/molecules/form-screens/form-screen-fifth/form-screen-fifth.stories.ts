import { CommonModule } from '@angular/common';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { largeButtonComponent } from '../../../atoms/buttons/largeButton/largeButton.component';
import { FormScreenFifthComponent } from './form-screen-fifth.component';

const props = {};

export default {
  title: 'Molecules/Form Screen',
  decorators: [
    moduleMetadata({
      declarations: [FormScreenFifthComponent, largeButtonComponent],
      imports: [CommonModule],
    }),
  ],
  argTypes: props,
} as Meta;

const Template: Story<FormScreenFifthComponent> = (args: FormScreenFifthComponent) => ({
    component: FormScreenFifthComponent,
    props: args,
  });

export const Fifth = Template.bind({});
Fifth.args = {};
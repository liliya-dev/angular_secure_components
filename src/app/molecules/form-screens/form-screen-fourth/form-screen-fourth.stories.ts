import { CommonModule } from '@angular/common';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { largeButtonComponent } from '../../../atoms/buttons/largeButton/largeButton.component';
import { FormScreenFourthComponent } from './form-screen-fourth.component';

const props = {};

export default {
    title: 'Molecules/Form Screen',
    decorators: [
      moduleMetadata({
        declarations: [FormScreenFourthComponent, largeButtonComponent],
        imports: [CommonModule],
      }),
    ],
    argTypes: props,
  } as Meta;

const Template: Story<FormScreenFourthComponent> = (args: FormScreenFourthComponent) => ({
  component: FormScreenFourthComponent,
  props: args,
});

export const Fourth = Template.bind({});
Fourth.args = {};


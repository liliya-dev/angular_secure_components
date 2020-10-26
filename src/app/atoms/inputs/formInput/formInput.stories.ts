import { Meta, Story } from '@storybook/angular';
import { formInputComponent } from './formInput.component';

const props = {
  backgroundColor: { control: 'color' },
  color: { control: 'color' },
  placeholder: { control: 'text'},
};

export default {
    title: 'Atoms/Input',
    component: formInputComponent,
    argTypes: props,
  } as Meta;

const Template: Story<formInputComponent> = (args: formInputComponent) => ({
  component: formInputComponent,
  props: args,
});

export const Text = Template.bind({});
Text.args = {
  placeholderText: "First Name",
  classes: "form-input-field form-input-field--simple fs-16-sofia-300",
  wrapperClasses: "form-input__wrapper form-input__wrapper--simple"
};



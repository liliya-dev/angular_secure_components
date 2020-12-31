import { CommonModule } from '@angular/common';
import { HttpClientModule} from '@angular/common/http';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { RequestTextInputComponent } from './request-text-input.component';

const props = {};

export default {
  title: 'DATA REQUEST FORM/Atoms/Inputs',
  decorators: [
    moduleMetadata({
      declarations: [RequestTextInputComponent],
      imports: [HttpClientModule, CommonModule]
    }),
  ],
  argTypes: props,
} as Meta;

const Template: Story<RequestTextInputComponent> = (args: RequestTextInputComponent) => ({
  component: RequestTextInputComponent,
  props: args,
});

export const Text = Template.bind({});
Text.args = {
  data: {
    id: '1',
    placeholderText: '',
    initialValue: 'initial value',
  },
  parentHandler: () => console.log('works')
};

import { HttpClientModule} from '@angular/common/http';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { RequestInputBlockComponent } from './request-input-block.component';
import { RequestTextInputComponent } from '../../Atoms/inputs/request-text-input/request-text-input.component';
import { RequestTextAreaComponent } from '../../Atoms/inputs/request-text-area/request-text-area.component';

const props = {};

export default {
  title: 'DATA REQUEST FORM/Molecules/Input Block',
  decorators: [
    moduleMetadata({
      declarations: [RequestInputBlockComponent, RequestTextInputComponent, RequestTextAreaComponent],
      imports: [HttpClientModule]
    }),
  ],
  argTypes: props,
} as Meta;

const Template: Story<RequestInputBlockComponent> = (args: RequestInputBlockComponent) => ({
  component: RequestInputBlockComponent,
  props: args,
  template: `
  <app-request-input-block [title]="title" [isRequired]="isRequired">
    <app-request-text-input 
      [data]="{ id: '1', placeholderText: '', initialValue: 'Matvey Dunuk' }"
    >
    </app-request-text-input>
  </app-request-input-block>
  `,
});

const Template2: Story<RequestInputBlockComponent> = (args: RequestInputBlockComponent) => ({
  component: RequestInputBlockComponent,
  props: args,
  template: `
  <app-request-input-block [title]="title" [isRequired]="isRequired">
    <app-request-text-area 
      [data]="{ id: '1', placeholderText: '', initialValue: 'Description' }"
    >
    </app-request-text-area>
  </app-request-input-block>
  `,
});

export const Text = Template.bind({});
Text.args = {
  title: 'full name',
  isRequired: true,
};

export const TextArea = Template2.bind({});
TextArea.args = {
  title: 'Message',
  isRequired: false,
};
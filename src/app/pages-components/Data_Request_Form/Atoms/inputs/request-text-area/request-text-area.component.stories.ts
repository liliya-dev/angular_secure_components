import { CommonModule } from '@angular/common';
import { HttpClientModule} from '@angular/common/http';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { RequestTextAreaComponent } from './request-text-area.component';
import { TextareaAutosizeModule } from 'ngx-textarea-autosize';

const props = {};

export default {
  title: 'DATA REQUEST FORM/Atoms/Inputs',
  decorators: [
    moduleMetadata({
      declarations: [RequestTextAreaComponent],
      imports: [HttpClientModule, CommonModule, TextareaAutosizeModule]
    }),
  ],
  argTypes: props,
} as Meta;

const Template: Story<RequestTextAreaComponent> = (args: RequestTextAreaComponent) => ({
  component: RequestTextAreaComponent,
  props: args,
});

export const TextArea = Template.bind({});
TextArea.args = {
  data: {
    id: '1',
    placeholderText: '',
    initialValue: 'Description',
  },
  parentHandler: () => console.log('works textarea handler')
};
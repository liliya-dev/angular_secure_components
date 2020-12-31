import { HttpClientModule} from '@angular/common/http';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { RequestPrimaryButtonComponent } from './request-primary-button.component';

const props = {};

export default {
  title: 'DATA REQUEST FORM/Atoms/Buttons',
  decorators: [
    moduleMetadata({
      declarations: [RequestPrimaryButtonComponent],
      imports: [HttpClientModule]
    }),
  ],
  argTypes: props,
} as Meta;

const Template: Story<RequestPrimaryButtonComponent> = (args: RequestPrimaryButtonComponent) => ({
  component: RequestPrimaryButtonComponent,
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {
  title: 'submit',
};
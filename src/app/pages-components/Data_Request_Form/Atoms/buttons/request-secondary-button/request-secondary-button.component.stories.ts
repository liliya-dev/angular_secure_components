import { HttpClientModule} from '@angular/common/http';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { RequestSecondaryButtonComponent } from './request-secondary-button.component';

const props = {};

export default {
  title: 'DATA REQUEST FORM/Atoms/Buttons',
  decorators: [
    moduleMetadata({
      declarations: [RequestSecondaryButtonComponent],
      imports: [HttpClientModule]
    }),
  ],
  argTypes: props,
} as Meta;

const Template: Story<RequestSecondaryButtonComponent> = (args: RequestSecondaryButtonComponent) => ({
  component: RequestSecondaryButtonComponent,
  props: args,
});

export const Secondary = Template.bind({});
Secondary.args = {
  title: 'cancel',
};
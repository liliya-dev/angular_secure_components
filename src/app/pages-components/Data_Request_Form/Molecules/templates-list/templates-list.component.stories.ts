import { HttpClientModule} from '@angular/common/http';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { TemplatesListComponent } from './templates-list.component';
import { TemplateItemComponent } from '../../Atoms/template-item/template-item.component';

const props = {};

export default {
  title: 'DATA REQUEST FORM/Molecules',
  decorators: [
    moduleMetadata({
      declarations: [TemplatesListComponent, TemplateItemComponent],
      imports: [HttpClientModule]
    }),
  ],
  argTypes: props,
} as Meta;

const Template: Story<TemplatesListComponent> = (args: TemplatesListComponent) => ({
  component: TemplatesListComponent,
  props: args,
});

export const TemplatesList = Template.bind({});
TemplatesList.args = {
  list: [
    { title: 'Company Name', value: 'CompanyName' },
    { title: 'Company email', value: 'CompanyEmail' },
    { title: 'Phone number', value: 'customer_Phonenumber' },
    { title: 'Mailing address', value: 'MailingAddress' },
    { title: 'Your name', value: 'customer_name' },
    { title: 'Request type', value: 'request_type' },
    { title: 'Phone number', value: 'PhoneNumber' },
    { title: 'Your email', value: 'customer_email' },
    { title: 'Message', value: 'customer_Message' },
    { title: 'Website URL', value: 'Website' },
    { title: 'Address', value: 'customer_address' },
  ]
};

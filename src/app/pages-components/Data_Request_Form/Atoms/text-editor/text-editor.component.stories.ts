import { HttpClientModule} from '@angular/common/http';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { TextEditorComponent } from './text-editor.component';

const props = {};

export default {
  title: 'DATA REQUEST FORM/Atoms',
  decorators: [
    moduleMetadata({
      declarations: [TextEditorComponent],
      imports: [HttpClientModule, AngularEditorModule]
    }),
  ],
  argTypes: props,
} as Meta;

const Template: Story<TextEditorComponent> = (args: TextEditorComponent) => ({
  component: TextEditorComponent,
  props: args,
});

export const TextEditor = Template.bind({});
TextEditor.args = {
  htmlContent: `
Hi ##Hal##,\n
A person has requested removal. The details of that person are\n
Name: ##customer_name##
Email: ##customer_email##
Address: ##customer_address##
Phone: ##customer_Phonenumber##
Request type: ##request_type##
Message: ##customer_Message##

Thank you,
Secure Privacy Team
    `
};




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
};




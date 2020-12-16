import { HttpClientModule} from '@angular/common/http';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { TemplateItemComponent } from './template-item.component';

const props = {};

export default {
  title: 'DATA REQUEST FORM/Atoms',
  decorators: [
    moduleMetadata({
      declarations: [TemplateItemComponent],
      imports: [HttpClientModule]
    }),
  ],
  argTypes: props,
} as Meta;

const Template: Story<TemplateItemComponent> = (args: TemplateItemComponent) => ({
  component: TemplateItemComponent,
  props: args,
});

export const TextEditor = Template.bind({});
TextEditor.args = {
  title: 'Company name',
  value: 'CompanyName'
};

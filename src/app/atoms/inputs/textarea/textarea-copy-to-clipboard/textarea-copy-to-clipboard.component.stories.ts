import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { TextareaCopyToClipboardComponent } from './textarea-copy-to-clipboard.component';
import { HttpClientModule } from '@angular/common/http';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { CommonModule } from '@angular/common';

const props = {};

export default {
  title: 'Atoms/Input/Textarea',
  decorators: [
    moduleMetadata({
      declarations: [TextareaCopyToClipboardComponent],
      imports: [CommonModule, HttpClientModule, AngularSvgIconModule.forRoot()]
    }),
  ],
  argTypes: props,
} as Meta;



const Template: Story<TextareaCopyToClipboardComponent> = (args: TextareaCopyToClipboardComponent) => ({
  component: TextareaCopyToClipboardComponent,
  props: args,
});

export const CopyToClipboard = Template.bind({});
CopyToClipboard.args = {
  placeholderText: "Text",
  initialValue: '<span id="sp-privacy-policy-embed-widget" class="sp-privacy-policy-preview" sp-lang-code="sv" onclick="sp.openPrivacyPolicy();" style="display:none;background-color: #00965d; color:#ffffff;"></span>'
};
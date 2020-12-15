import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { PoliciesTextareaCopyToClipboardComponent } from './textarea-copy-to-clipboard.component';
import { HttpClientModule } from '@angular/common/http';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { CommonModule } from '@angular/common';

const props = {};

export default {
  title: 'Policies Generator/Atoms',
  decorators: [
    moduleMetadata({
      declarations: [PoliciesTextareaCopyToClipboardComponent],
      imports: [CommonModule, HttpClientModule, AngularSvgIconModule.forRoot()]
    }),
  ],
  argTypes: props,
} as Meta;

const Template: Story<PoliciesTextareaCopyToClipboardComponent> = (args: PoliciesTextareaCopyToClipboardComponent) => ({
  component: PoliciesTextareaCopyToClipboardComponent,
  props: args,
});

export const CopyToClipboardTextarea= Template.bind({});
CopyToClipboardTextarea.args = {
  placeholderText: "Text",
  initialValue: '<span id="sp-privacy-policy-embed-widget" class="sp-privacy-policy-preview" sp-lang-code="sv" onclick="sp.openPrivacyPolicy();" style="display:none;background-color: #00965d; color:#ffffff;"></span>'
};
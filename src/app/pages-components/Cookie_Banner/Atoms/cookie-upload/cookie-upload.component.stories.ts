import { stretch } from '@amcharts/amcharts4/.internal/core/utils/Math';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { CookieUploadComponent } from './cookie-upload.component';

const props = {};

export default {
  title: 'Cookie Banner/Atoms',
  decorators: [
    moduleMetadata({
      declarations: [
        CookieUploadComponent,
      ],
      imports: [],
    }),
  ],
  argTypes: props,
} as Meta;

const Template: Story<CookieUploadComponent> = (args: CookieUploadComponent) => ({
  component: CookieUploadComponent,
  props: args,
});

export const Upload = Template.bind({});
Upload.args = {
  id: 'customImage',
  defaultSrc: 'assets/images/cookie-banner/logo.svg'
};

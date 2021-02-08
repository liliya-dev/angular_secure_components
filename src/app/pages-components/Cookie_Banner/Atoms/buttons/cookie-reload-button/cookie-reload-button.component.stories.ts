import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { CookieReloadButtonComponent } from './cookie-reload-button.component';
import { ColorSketchModule } from 'ngx-color/sketch';

const props = {};

export default {
  title: 'Cookie Banner/Atoms/Buttons',
  decorators: [
    moduleMetadata({
      declarations: [
        CookieReloadButtonComponent
      ],
      imports: [ColorSketchModule],
    }),
  ],
  argTypes: props,
} as Meta;

const Template: Story<CookieReloadButtonComponent> = (args: CookieReloadButtonComponent) => ({
  component: CookieReloadButtonComponent,
  props: args,
});

export const Reload = Template.bind({});
Reload.args = {};
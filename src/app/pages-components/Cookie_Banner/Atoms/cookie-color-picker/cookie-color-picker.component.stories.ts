import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { CookieColorPickerComponent } from './cookie-color-picker.component';
import { ColorSketchModule } from 'ngx-color/sketch';
import { CookieReloadButtonComponent } from '../buttons/cookie-reload-button/cookie-reload-button.component';

const props = {};

export default {
  title: 'Cookie Banner/Atoms',
  decorators: [
    moduleMetadata({
      declarations: [
        CookieColorPickerComponent,
        CookieReloadButtonComponent
      ],
      imports: [ColorSketchModule],
    }),
  ],
  argTypes: props,
} as Meta;

const Template: Story<CookieColorPickerComponent> = (args: CookieColorPickerComponent) => ({
  component: CookieColorPickerComponent,
  props: args,
});

export const ColorPicker = Template.bind({});
ColorPicker.args = {
  defaultHexColor : '#A5C3B3'
};

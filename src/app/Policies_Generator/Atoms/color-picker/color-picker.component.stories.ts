import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { PoliciesColorPickerComponent } from './color-picker.component';
import { ColorSketchModule } from 'ngx-color/sketch';

const props = {};

export default {
  title: 'Policies Generator/Atoms',
  decorators: [
    moduleMetadata({
      declarations: [
        PoliciesColorPickerComponent
      ],
      imports: [ColorSketchModule],
    }),
  ],
  argTypes: props,
} as Meta;

const Template: Story<PoliciesColorPickerComponent> = (args: PoliciesColorPickerComponent) => ({
  component: PoliciesColorPickerComponent,
  props: args,
});

export const ColorPicker = Template.bind({});
ColorPicker.args = {
  startHexColor : '#A5C3B3'
};

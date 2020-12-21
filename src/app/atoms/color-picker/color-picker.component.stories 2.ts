import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { ColorPickerComponent } from './color-picker.component';
import { ColorSketchModule } from 'ngx-color/sketch';

const props = {
  percent: { control: 'array' },
};

export default {
  title: 'Atoms/Color Picker',
  decorators: [
    moduleMetadata({
      declarations: [
        ColorPickerComponent
      ],
      imports: [ColorSketchModule],
    }),
  ],
  argTypes: props,
} as Meta;


const Template: Story<ColorPickerComponent> = (args: ColorPickerComponent) => ({
  component: ColorPickerComponent,
  props: args,
});

export const Circled = Template.bind({});
Circled.args = {
  percent: [90],
};

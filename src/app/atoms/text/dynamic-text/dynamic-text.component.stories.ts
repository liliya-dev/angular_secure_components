import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { DynamicTextComponent } from './dynamic-text.component';
import { TextareaAutosizeModule } from 'ngx-textarea-autosize';

const props = {};

export default {
  title: 'Atoms/Text',
  decorators: [
    moduleMetadata({
      declarations: [
        DynamicTextComponent
      ],
      imports: [TextareaAutosizeModule],
    }),
  ],
  argTypes: props,
} as Meta;

const Template: Story<DynamicTextComponent> = (args: DynamicTextComponent) => ({
  component: DynamicTextComponent,
  props: args,
});

export const Dynamic = Template.bind({});
Dynamic.args = {
  data: { title: 'paragraph' }
};
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { PoliciesDynamicTextComponent } from './dynamic-text.component';
import { TextareaAutosizeModule } from 'ngx-textarea-autosize';

const props = {};

export default {
  title: 'Policies Customize/Atoms/Dynamic',
  decorators: [
    moduleMetadata({
      declarations: [
        PoliciesDynamicTextComponent
      ],
      imports: [TextareaAutosizeModule],
    }),
  ],
  argTypes: props,
} as Meta;

const Template: Story<PoliciesDynamicTextComponent> = (args: PoliciesDynamicTextComponent) => ({
  component: PoliciesDynamicTextComponent,
  props: args,
});

export const Text = Template.bind({});
Text.args = {
  data: { title: 'paragraph' }
};
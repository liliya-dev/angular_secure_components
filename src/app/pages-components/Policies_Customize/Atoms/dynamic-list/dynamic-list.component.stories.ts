import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { PoliciesDynamicListComponent } from './dynamic-list.component';
import { TextareaAutosizeModule } from 'ngx-textarea-autosize';

const props = {};

export default {
  title: 'Policies Customize/Atoms/Dynamic',
  decorators: [
    moduleMetadata({
      declarations: [
        PoliciesDynamicListComponent
      ],
      imports: [TextareaAutosizeModule],
    }),
  ],
  argTypes: props,
} as Meta;

const Template: Story<PoliciesDynamicListComponent> = (args: PoliciesDynamicListComponent) => ({
  component: PoliciesDynamicListComponent,
  props: args,
});

export const List = Template.bind({});
List.args = {
  data: {
    listTitle: 'Put list title',
    titles: ['Type text here']
  }
};
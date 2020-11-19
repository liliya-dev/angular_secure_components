import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { DynamicListComponent } from './dynamic-list.component';
import { TextareaAutosizeModule } from 'ngx-textarea-autosize';

const props = {};

export default {
  title: 'Atoms/Tables',
  decorators: [
    moduleMetadata({
      declarations: [
        DynamicListComponent
      ],
      imports: [TextareaAutosizeModule],
    }),
  ],
  argTypes: props,
} as Meta;

const Template: Story<DynamicListComponent> = (args: DynamicListComponent) => ({
  component: DynamicListComponent,
  props: args,
});

export const DynamicList = Template.bind({});
DynamicList.args = {
  data: {
    listTitle: 'Put list title',
    titles: ['Type text here']
  }
};
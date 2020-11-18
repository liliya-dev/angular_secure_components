import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { DynamicListComponent } from './dynamic-list.component';

const props = {};

export default {
  title: 'Atoms/Tables',
  decorators: [
    moduleMetadata({
      declarations: [
        DynamicListComponent
      ],
      imports: [],
    }),
  ],
  argTypes: props,
} as Meta;

const Template: Story<DynamicListComponent> = (args: DynamicListComponent) => ({
  component: DynamicListComponent,
  props: args,
});

export const DynamicList = Template.bind({});
DynamicList.args = {};
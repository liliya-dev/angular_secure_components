import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { DynamicTableComponent } from './dynamic-table.component';
import { DarkAddButtonComponent } from '../../buttons/add-buttons/dark-add-button/dark-add-button.component';
import { SmallLightAddButtonComponent } from '../../buttons/add-buttons/small-light-add-button/small-light-add-button.component';

const props = {};

export default {
  title: 'Atoms/Tables',
  decorators: [
    moduleMetadata({
      declarations: [
        SmallLightAddButtonComponent,
        DarkAddButtonComponent
      ],
      imports: [],
    }),
  ],
  argTypes: props,
} as Meta;

const Template: Story<DynamicTableComponent> = (args: DynamicTableComponent) => ({
  component: DynamicTableComponent,
  props: args,
});

export const Dynamic = Template.bind({});
Dynamic.args = {};





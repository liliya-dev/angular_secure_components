import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { CustomizedElementComponent } from './customized-element.component';
import { DynamicTableComponent } from '../../atoms/tables/dynamic-table/dynamic-table.component';
import { DarkAddButtonComponent } from '../../atoms/buttons/add-buttons/dark-add-button/dark-add-button.component';
import { SmallLightAddButtonComponent } from '../../atoms/buttons/add-buttons/small-light-add-button/small-light-add-button.component';

const props = {};

export default {
  title: 'Molecules/Customized Block',
  decorators: [
    moduleMetadata({
      declarations: [
        CustomizedElementComponent,
        DynamicTableComponent,
        SmallLightAddButtonComponent,
        DarkAddButtonComponent
      ],
      entryComponents: [
        DynamicTableComponent
     ],
      imports: [],
    }),
  ],
  argTypes: props,
} as Meta;

const Template: Story<CustomizedElementComponent> = (args: CustomizedElementComponent) => ({
  component: CustomizedElementComponent,
  props: args,
});

export const Simple = Template.bind({});
Simple.args = {};
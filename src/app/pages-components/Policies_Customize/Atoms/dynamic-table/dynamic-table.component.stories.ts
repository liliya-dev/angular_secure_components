import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { PoliciesDynamicTableComponent } from './dynamic-table.component';
import { PoliciesDarkAddButtonComponent } from '../buttons/dark-add-button/dark-add-button.component';
import { PoliciesSmallLightAddButtonComponent } from '../buttons/small-light-add-button/small-light-add-button.component';

const props = {};

export default {
  title: 'Policies Customize/Atoms/Dynamic',
  decorators: [
    moduleMetadata({
      declarations: [
        PoliciesSmallLightAddButtonComponent,
        PoliciesDarkAddButtonComponent
      ],
      imports: [],
    }),
  ],
  argTypes: props,
} as Meta;

const Template: Story<PoliciesDynamicTableComponent> = (args: PoliciesDynamicTableComponent) => ({
  component: PoliciesDynamicTableComponent,
  props: args,
});

export const Table = Template.bind({});
Table.args = {
  data: {
    heads: ['text 1'],
    tableData: [{ 'text 1' : '1.1. Text', }, { 'text 1' : '1.1. Text', }]
  }
};





import { CommonModule } from '@angular/common';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { SelectInputComponent } from './select-input.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { searchItemComponent } from '../../atoms/searchItem/searchItem.component';

const props = {
};

export default {
  title: 'Molecules/Select',
  decorators: [
    moduleMetadata({
      declarations: [SelectInputComponent, searchItemComponent],
      imports: [CommonModule, NgSelectModule]
    }),
  ],
  argTypes: props,
} as Meta;

const Template: Story<SelectInputComponent> = (args: SelectInputComponent) => ({
  component: SelectInputComponent,
  props: args,
});

export const Select = Template.bind({});
Select.args = {
};


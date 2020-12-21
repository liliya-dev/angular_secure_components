import { CommonModule } from '@angular/common';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { ReportsSelectWithInitialValueComponent } from './reports-select-with-initial-value.component';
import { NgSelectModule } from '@ng-select/ng-select';

const props = {};

export default {
  title: 'Reports/Atoms/Input',
  decorators: [
    moduleMetadata({
      declarations: [ReportsSelectWithInitialValueComponent],
      imports: [CommonModule, NgSelectModule]
    }),
  ],
  argTypes: props,
} as Meta;

const Template: Story<ReportsSelectWithInitialValueComponent> = (args: ReportsSelectWithInitialValueComponent) => ({
  component: ReportsSelectWithInitialValueComponent,
  props: args,
});

export const SelectWithInitialValue = Template.bind({});
SelectWithInitialValue.args = {
  items: ['gdpr', 'ccpa', 'lgpd'],
};


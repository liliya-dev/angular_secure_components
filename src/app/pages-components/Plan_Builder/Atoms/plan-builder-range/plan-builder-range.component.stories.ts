import { CommonModule } from '@angular/common';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { PlanBuilderRangeComponent } from './plan-builder-range.component';

const props = {
  items: { control: 'object' }
};

export default {
  title: 'Plan Builder/Atoms/Inputs',
  decorators: [
    moduleMetadata({
      declarations: [PlanBuilderRangeComponent],
      imports: [CommonModule],
    }),
  ],
  argTypes: props,
} as Meta;

const Template: Story<PlanBuilderRangeComponent> = (args: PlanBuilderRangeComponent) => ({
  component: PlanBuilderRangeComponent,
  props: args,
});

export const Range = Template.bind({});
Range.args = {
  points: [1, 5, 10, 20, 30, 40],
  value: 10,
  onChange: (event) => console.log(event)
};
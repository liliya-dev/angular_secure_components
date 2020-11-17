import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { SimpleCounterComponent } from './simple-counter.component';
import { formInputComponent } from '../../inputs/formInput/formInput.component';
import { lightButtonComponent } from '../../buttons/lightButton/lightButton.component';

const props = {};

export default {
  title: 'Atoms/Counters',
  decorators: [
    moduleMetadata({
      declarations: [
        SimpleCounterComponent,
        lightButtonComponent,
        formInputComponent
      ],
      imports: [],
    }),
  ],
  argTypes: props,
} as Meta;

const Template: Story<SimpleCounterComponent> = (args: SimpleCounterComponent) => ({
  component: SimpleCounterComponent,
  props: args,
});

export const Simple = Template.bind({});
Simple.args = {
  initialValue: 5
};


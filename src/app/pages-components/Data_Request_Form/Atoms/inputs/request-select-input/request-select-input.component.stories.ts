import { HttpClientModule} from '@angular/common/http';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { NgSelectModule } from '@ng-select/ng-select';
import { RequestSelectInputComponent } from './request-select-input.component';

const props = {};

export default {
  title: 'DATA REQUEST FORM/Atoms/Inputs',
  decorators: [
    moduleMetadata({
      declarations: [RequestSelectInputComponent],
      imports: [HttpClientModule, NgSelectModule]
    }),
  ],
  argTypes: props,
} as Meta;

const Template: Story<RequestSelectInputComponent> = (args: RequestSelectInputComponent) => ({
  component: RequestSelectInputComponent,
  props: args,
});

export const Select = Template.bind({});
Select.args = {
  data: {
    id: '1',
    initialValue: 'English',
    values: ['English', 'German', 'Italian', 'Danish']
  },
  parentHandler: () => console.log('works select')
};

import { HttpClientModule} from '@angular/common/http';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { RequestFormComponent } from './request-form.component';
import { RequestSelectInputComponent } from '../../Atoms/inputs/request-select-input/request-select-input.component';
import { RequestInputBlockComponent } from '../../Molecules/request-input-block/request-input-block.component';
import { RequestTextInputComponent } from '../../Atoms/inputs/request-text-input/request-text-input.component';
import { RequestTextAreaComponent } from '../../Atoms/inputs/request-text-area/request-text-area.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { RequestPrimaryButtonComponent } from '../../Atoms/buttons/request-primary-button/request-primary-button.component';
import { RequestSecondaryButtonComponent } from '../../Atoms/buttons/request-secondary-button/request-secondary-button.component';

const props = {};

export default {
  title: 'DATA REQUEST FORM/Organisms',
  decorators: [
    moduleMetadata({
      declarations: [
        RequestFormComponent, 
        RequestTextInputComponent, 
        RequestTextAreaComponent, 
        RequestInputBlockComponent,
        RequestSelectInputComponent,
        RequestPrimaryButtonComponent,
        RequestSecondaryButtonComponent
      ],
      imports: [HttpClientModule, NgSelectModule]
    }),
  ],
  argTypes: props,
} as Meta;

const Template: Story<RequestFormComponent> = (args: RequestFormComponent) => ({
  component: RequestFormComponent,
  props: args,
});

export const Form = Template.bind({});
Form.args = {
  initialRequiredFieldsData: [
    { 
      title: 'Full name', 
      isRequired: true, 
      type: 'input', 
      data: {
        id: 'name',
        placeholderText: '',
        initialValue: 'Matvey Dunuk',
      }
    },
    { 
      title: 'email', 
      isRequired: true, 
      type: 'input', 
      data: {
        id: 'email',
        placeholderText: '',
        initialValue: 'secureprivacy@gmail.com',
      }
    } ,
    { 
      title: 'address', 
      isRequired: true, 
      type: 'input', 
      data: {
        id: 'adderess',
        placeholderText: '',
        initialValue: 'Colorado, Random st. 205/b',
      }
    },
    { 
      title: 'phone number', 
      isRequired: true, 
      type: 'input', 
      data: {
        id: 'phone',
        placeholderText: '',
        initialValue: '+380937198445',
      }
    },
    { 
      title: 'message', 
      isRequired: false, 
      type: 'textarea', 
      data: {
        id: 'message',
        placeholderText: '',
        initialValue: 'description',
      }
    }  
  ]
};

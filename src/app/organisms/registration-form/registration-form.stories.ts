import { CommonModule } from '@angular/common';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { infoButtonComponent } from '../../atoms/buttons/infoButton/infoButton.component'
import { searchItemComponent } from '../../atoms/searchItem/searchItem.component';
import { gradientButtonComponent } from '../../atoms/buttons/gradientButton/gradientButton.component'
import { IconContainerComponent } from '../../atoms/iconContainer/iconContainer.component';
import { StepsComponent } from '../../atoms/steps/steps.component';
import { CardComponent } from '../../atoms/card/card.component';
import { largeButtonComponent } from '../../atoms/buttons/largeButton/largeButton.component';
import { simpleButtonComponent } from '../../atoms/buttons/simpleButton/simpleButton.component';
import { formInputComponent } from '../../atoms/inputs/formInput/formInput.component';
import { SelectInputSimpleComponent } from '../../atoms/inputs/select-input/select-input-simple/select-input-simple.component';
import { FormScreenFirstComponent } from '../../molecules/form-screens/form-screen-first/form-screen-first.component';
import { FormScreenSecondComponent } from '../../molecules/form-screens/form-screen-second/form-screen-second.component';
import { FormScreenThirdComponent } from '../../molecules/form-screens/form-screen-third/form-screen-third.component';
import { FormScreenFourthComponent } from '../../molecules/form-screens/form-screen-fourth/form-screen-fourth.component';
import { FormScreenFifthComponent } from '../../molecules/form-screens/form-screen-fifth/form-screen-fifth.component';
import { RegistrationFormComponent } from './registration-form.component';
import { NgSelectModule } from '@ng-select/ng-select';

const props = {};

export default {
  title: 'Organisms/Registration form',
  decorators: [
    moduleMetadata({
    declarations: [
      RegistrationFormComponent, 
      infoButtonComponent,
      searchItemComponent,
      gradientButtonComponent,
      StepsComponent,
      largeButtonComponent,
      formInputComponent,
      IconContainerComponent,
      FormScreenFirstComponent,
      FormScreenSecondComponent,
      FormScreenThirdComponent,
      FormScreenFourthComponent,
      FormScreenFifthComponent,
      CardComponent,
      simpleButtonComponent,
      SelectInputSimpleComponent
    ],
    imports: [CommonModule, NgSelectModule],
    }),
  ],
  argTypes: props,
} as Meta;

const Template: Story<RegistrationFormComponent> = (args: RegistrationFormComponent) => ({
  component: RegistrationFormComponent,
  props: args,
});

export const RegistrationForm = Template.bind({});
RegistrationForm.args = {};


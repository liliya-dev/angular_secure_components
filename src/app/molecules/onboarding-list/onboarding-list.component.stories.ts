import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { OnboardingListComponent } from './onboarding-list.component';
import { ApproveModalComponent } from '../../atoms/modals/approve-modal/approve-modal.component';
import { OnboardingCardComponent } from '../../atoms/card/onboarding-card/onboarding-card.component';
import { CheckboxMutableGradientComponent } from '../../atoms/inputs/checkbox/checkbox-mutable-gradient/checkbox-mutable-gradient.component';
import { MutableDangerButtonComponent } from '../../atoms/buttons/domains-card-buttons/mutable-danger-button/mutable-danger-button.component';
import { MutableGradientIconButtonComponent } from '../../atoms/buttons/domains-card-buttons/mutable-gradient-icon-button/mutable-gradient-icon-button.component';
import { MutablePrimaryButtonComponent } from '../../atoms/buttons/domains-card-buttons/mutable-primary-button/mutable-primary-button.component';
import { CommonModule } from '@angular/common';
import { formInputComponent } from '../../atoms/inputs/formInput/formInput.component';
import { simpleButtonComponent } from '../../atoms/buttons/simpleButton/simpleButton.component';
import { HttpClientModule } from '@angular/common/http';
import { AngularSvgIconModule } from 'angular-svg-icon';

const props = {};

export default {
  title: 'Molecules/Onboarding List',
  decorators: [
    moduleMetadata({
      declarations: [
        OnboardingListComponent,
        formInputComponent,
        simpleButtonComponent,
        OnboardingCardComponent,
        MutablePrimaryButtonComponent,
        MutableGradientIconButtonComponent,
        MutableDangerButtonComponent,
        CheckboxMutableGradientComponent,
        ApproveModalComponent
      ],
      imports: [CommonModule, HttpClientModule, AngularSvgIconModule.forRoot()],
    }),
  ],
  argTypes: props,
} as Meta;

const Template: Story<OnboardingListComponent> = (args: OnboardingListComponent) => ({
  component: OnboardingListComponent,
  props: args,
});

export const OnboardingList = Template.bind({});
OnboardingList.args = {
  domains: [
    { id: '1', title: 'Secure Privacy 1', text: 'secureprivacy.ai' },
    { id: '2', title: 'Secure Privacy 2', text: 'secureprivacy.ai' },
    { id: '3', title: 'Secure Privacy 3', text: 'secureprivacy.ai' },
    { id: '4', title: 'Secure Privacy 4', text: 'secureprivacy.ai' },
    { id: '5', title: 'Secure Privacy 5', text: 'secureprivacy.ai' },
    { id: '6', title: 'Secure Privacy 6', text: 'secureprivacy.ai' },
  ],
  selected: ['2', '3']
};

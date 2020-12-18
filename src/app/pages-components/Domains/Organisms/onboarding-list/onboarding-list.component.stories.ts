import { CommonModule } from '@angular/common';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { DomainsMutableLightButtonComponent } from '../../Atoms/buttons/mutable-light-button/mutable-light-button.component';
import { DomainsSearchInputComponent } from '../../Atoms/domains-search-input/domains-search-input.component';
import { DomainsOnboardingListComponent } from './onboarding-list.component';
import { DomainsApproveModalComponent } from '../../Atoms/modals/approve-modal/approve-modal.component';
import { DomainsOnboardingCardComponent } from '../../Molecules/onboarding-card/onboarding-card.component';
import { DomainsCheckboxMutableGradientComponent } from '../../Atoms/checkbox-mutable-gradient/checkbox-mutable-gradient.component';
import { DomainsMutableDangerButtonComponent } from '../../Atoms/buttons/mutable-danger-button/mutable-danger-button.component';
import { DomainsMutableGradientIconButtonComponent } from '../../Atoms/buttons/mutable-gradient-icon-button/mutable-gradient-icon-button.component';
import { DomainsMutablePrimaryButtonComponent } from '../../Atoms/buttons/mutable-primary-button/mutable-primary-button.component';
import { DomainsFormInputComponent } from '../../Atoms/formInput/formInput.component';
import { DomainsSimpleButtonComponent } from '../../Atoms/buttons/simpleButton/simpleButton.component';
import { HttpClientModule } from '@angular/common/http';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { DomainsSvgButtonComponent } from '../../Atoms/buttons/domains-svg-button/domains-svg-button.component';

const props = {};

export default {
  title: 'Domains/Organisms',
  decorators: [
    moduleMetadata({
      declarations: [
        DomainsMutableLightButtonComponent,
        DomainsSearchInputComponent,
        DomainsOnboardingListComponent,
        DomainsFormInputComponent,
        DomainsSimpleButtonComponent,
        DomainsOnboardingCardComponent,
        DomainsMutablePrimaryButtonComponent,
        DomainsMutableGradientIconButtonComponent,
        DomainsMutableDangerButtonComponent,
        DomainsCheckboxMutableGradientComponent,
        DomainsApproveModalComponent,
        DomainsSvgButtonComponent
      ],
      imports: [
        CommonModule, 
        HttpClientModule, 
        AngularSvgIconModule.forRoot(),
        DragDropModule
      ],
    }),
  ],
  argTypes: props,
} as Meta;

const Template: Story<DomainsOnboardingListComponent> = (args: DomainsOnboardingListComponent) => ({
  component: DomainsOnboardingListComponent,
  props: args,
});

export const OnboardingList = Template.bind({});
OnboardingList.args = {
  initialDomainsList: [
    { id: '1', title: 'Secure Privacy 1', text: 'secureprivacy.ai' },
    { id: '2', title: 'Secure Privacy 2', text: 'secureprivacy.ai' },
    { id: '3', title: 'Secure Privacy 3', text: 'secureprivacy.ai' },
    { id: '4', title: 'Secure Privacy 4', text: 'secureprivacy.ai' },
    { id: '5', title: 'Secure Privacy 5', text: 'secureprivacy.ai' },
    { id: '6', title: 'Secure Privacy 6', text: 'secureprivacy.ai' },
  ],
  selected: ['2', '3']
};

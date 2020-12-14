import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { OnboardingCardComponent } from './onboarding-card.component';
import { CheckboxMutableGradientComponent } from '../../inputs/checkbox/checkbox-mutable-gradient/checkbox-mutable-gradient.component';
import { MutableDangerButtonComponent } from '../../buttons/domains-card-buttons/mutable-danger-button/mutable-danger-button.component';
import { MutableGradientIconButtonComponent } from '../../buttons/domains-card-buttons/mutable-gradient-icon-button/mutable-gradient-icon-button.component';
import { MutablePrimaryButtonComponent } from '../../buttons/domains-card-buttons/mutable-primary-button/mutable-primary-button.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AngularSvgIconModule } from 'angular-svg-icon';

const props = {
};

export default {
  title: 'Atoms/Card',
  decorators: [
    moduleMetadata({
      declarations: [
        OnboardingCardComponent,
        MutablePrimaryButtonComponent,
        MutableGradientIconButtonComponent,
        MutableDangerButtonComponent,
        CheckboxMutableGradientComponent
      ],
      imports: [CommonModule, HttpClientModule, AngularSvgIconModule.forRoot()],
    }),
  ],
  argTypes: props,
} as Meta;

const Template: Story<OnboardingCardComponent> = (args: OnboardingCardComponent) => ({
  component: OnboardingCardComponent,
  props: args,
});

export const OnBoarding = Template.bind({});
OnBoarding.args = {
  isSelected: true,
  title: 'Secure Privacy',
  text: 'secureprivacy.ai'
};

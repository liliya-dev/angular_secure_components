import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { DomainsOnboardingCardComponent } from './onboarding-card.component';
import { DomainsCheckboxMutableGradientComponent } from '../../Atoms/checkbox-mutable-gradient/checkbox-mutable-gradient.component';
import { DomainsMutableDangerButtonComponent } from '../../Atoms/buttons/mutable-danger-button/mutable-danger-button.component';
import { DomainsMutableGradientIconButtonComponent } from '../../Atoms/buttons/mutable-gradient-icon-button/mutable-gradient-icon-button.component';
import { DomainsMutablePrimaryButtonComponent } from '../../Atoms/buttons/mutable-primary-button/mutable-primary-button.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AngularSvgIconModule } from 'angular-svg-icon';

const props = {};

export default {
  title: 'Domains/Molecules',
  decorators: [
    moduleMetadata({
      declarations: [
        DomainsOnboardingCardComponent,
        DomainsMutablePrimaryButtonComponent,
        DomainsMutableGradientIconButtonComponent,
        DomainsMutableDangerButtonComponent,
        DomainsCheckboxMutableGradientComponent
      ],
      imports: [CommonModule, HttpClientModule, AngularSvgIconModule.forRoot()],
    }),
  ],
  argTypes: props,
} as Meta;

const Template: Story<DomainsOnboardingCardComponent> = (args: DomainsOnboardingCardComponent) => ({
  component: DomainsOnboardingCardComponent,
  props: args,
});

export const Card = Template.bind({});
Card.args = {
  isSelected: true,
  title: 'Secure Privacy',
  text: 'secureprivacy.ai'
};

import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { TeamsCardsListComponent } from './teams-cards-list.component';
import { TeamsCardComponent } from '../../Molecules/teams-card/teams-card.component';
import { TeamsCheckboxMutableGradientComponent } from '../../Atoms/inputs/teams-checkbox-mutable-gradient/teams-checkbox-mutable-gradient.component';
import { TeamsMutableDangerButtonComponent } from '../../Atoms/buttons/teams-mutable-danger-button/teams-mutable-danger-button.component';
import { TeamsMutableGradientIconButtonComponent } from '../../Atoms/buttons/teams-mutable-gradient-icon-button/teams-mutable-gradient-icon-button.component';
import { TeamsMutablePrimaryButtonComponent } from '../../Atoms/buttons/teams-mutable-primary-button/teams-mutable-primary-button.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { TeamsTipsComponent } from '../../Atoms/teams-tips/teams-tips.component';
import { TeamsSearchInputComponent } from '../../Atoms/inputs/teams-search-input/teams-search-input.component';
import { TeamsSecondaryButtonComponent } from '../../Atoms/buttons/teams-secondary-button/teams-secondary-button.component';
import { TeamsSimpleButtonComponent } from '../../Atoms/buttons/teams-simple-button/teams-simple-button.component';
import { TeamsModalComponent } from '../../Atoms/modals/teams-modal/teams-modal.component';
import { TeamsInputComponent } from '../../Atoms/inputs/teams-input/teams-input.component';
import { TeamsSvgButtonComponent } from '../../Atoms/buttons/teams-svg-button/teams-svg-button.component';

const props = {};

export default {
  title: 'Teams/Organisms',
  decorators: [
    moduleMetadata({
      declarations: [
        TeamsSvgButtonComponent,
        TeamsInputComponent,
        TeamsModalComponent,
        TeamsSimpleButtonComponent,
        TeamsSearchInputComponent,
        TeamsCardsListComponent,
        TeamsTipsComponent,
        TeamsCardComponent,
        TeamsMutableDangerButtonComponent,
        TeamsMutableGradientIconButtonComponent,
        TeamsMutablePrimaryButtonComponent,
        TeamsCheckboxMutableGradientComponent,
        TeamsSecondaryButtonComponent
      ],
      imports: [CommonModule, HttpClientModule, AngularSvgIconModule.forRoot()],
    }),
  ],
  argTypes: props,
} as Meta;

const Template: Story<TeamsCardsListComponent> = (args: TeamsCardsListComponent) => ({
  component: TeamsCardsListComponent,
  props: args,
});

export const CardList = Template.bind({});
CardList.args = {
  initialUsersList: [
    {
      tip: {
        title: 'Account owner',
        text: 'Has access to all domains and all settings.'
      },
      name: 'Atrem Borysenko',
      text: 'secureprivacy.ai',
      position: 'Account owner',
      id: '1'
    },
    {
      tip: {
        title: 'Account manager',
        text: 'Has access to some domains and some settings.'
      },
      name: 'Anton Ivanov',
      text: 'secureprivacy.ai',
      position: 'Account manager',
      id: '2'
    },
    {
      tip: {
        title: 'Account user',
        text: 'Has no access to all domains and all settings.'
      },
      name: 'John Jackson',
      text: 'secureprivacy.ai',
      position: 'Account user',
      id: '3'
    },
    {
      tip: {
        title: 'Account owner',
        text: 'Has access to all domains and all settings.'
      },
      name: 'Dana Lalova',
      text: 'secureprivacy.ai',
      position: 'Account owner',
      id: '4'
    },
  ],
  selected: ['1', '3']
};

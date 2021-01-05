import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { TeamsCardComponent } from './teams-card.component';
import { TeamsCheckboxMutableGradientComponent } from '../../Atoms/inputs/teams-checkbox-mutable-gradient/teams-checkbox-mutable-gradient.component';
import { TeamsMutableDangerButtonComponent } from '../../Atoms/buttons/teams-mutable-danger-button/teams-mutable-danger-button.component';
import { TeamsMutableGradientIconButtonComponent } from '../../Atoms/buttons/teams-mutable-gradient-icon-button/teams-mutable-gradient-icon-button.component';
import { TeamsMutablePrimaryButtonComponent } from '../../Atoms/buttons/teams-mutable-primary-button/teams-mutable-primary-button.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { TeamsTipsComponent } from '../../Atoms/teams-tips/teams-tips.component';

const props = {};

export default {
  title: 'Teams/Molecules',
  decorators: [
    moduleMetadata({
      declarations: [
        TeamsTipsComponent,
        TeamsCardComponent,
        TeamsMutableDangerButtonComponent,
        TeamsMutableGradientIconButtonComponent,
        TeamsMutablePrimaryButtonComponent,
        TeamsCheckboxMutableGradientComponent
      ],
      imports: [CommonModule, HttpClientModule, AngularSvgIconModule.forRoot()],
    }),
  ],
  argTypes: props,
} as Meta;

const Template: Story<TeamsCardComponent> = (args: TeamsCardComponent) => ({
  component: TeamsCardComponent,
  props: args,
});

export const Card = Template.bind({});
Card.args = {
  isSelected: false,
  tip: {
    title: 'Account owner',
    text: 'Has access to all domains and all settings.'
  },
  name: 'Atrem Borysenko',
  email: 'secureprivacy.ai',
  position: 'Account owner',
  edit: (id) => console.log('edited', id),
  delete: (id) => console.log('deleted', id),
  select: (id) => console.log('selected', id),
  duplicate: (id) => console.log('duplicated', id),
  id: 1
};

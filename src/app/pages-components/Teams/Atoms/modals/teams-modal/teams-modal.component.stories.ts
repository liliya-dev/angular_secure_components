import { CommonModule } from '@angular/common';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { TeamsModalComponent } from './teams-modal.component';
import { TeamsSimpleButtonComponent } from '../../buttons/teams-simple-button/teams-simple-button.component';
import { TeamsInputComponent } from '../../inputs/teams-input/teams-input.component';

const props = {};

export default {
  title: 'Teams/Atoms/ Modals ',
  decorators: [
    moduleMetadata({
      declarations: [
        TeamsModalComponent,
        TeamsSimpleButtonComponent,
        TeamsInputComponent
      ],
      imports: [CommonModule],
    }),
  ],
  argTypes: props,
} as Meta;

const Template: Story<TeamsModalComponent> = (args: TeamsModalComponent) => ({
  component: TeamsModalComponent,
  props: args,
  template: `
  <app-teams-modal 
    [title]="title" 
    [primaryButtonTitle]="primaryButtonTitle"
    [dangerButtonTitle]="dangerButtonTitle"
    (primaryButtonFunction)="primaryButtonFunction()"
    (dangerButtonFunction)="dangerButtonFunction()"
    (closeModal)="closeModal()"
  >
    <p class="fs-16-sofia-300">Do you really want to delete the <strong>Anton Ivanov</strong></p>
  </app-teams-modal>
  `,
});

const stylesForTemplate2 = {
  'text-align': 'left',
  'color': 'rgba(var(--secondary-color-code), 0.5)',
  'margin': '16px 0 8px',
  'line-height': '150%'
}

const Template2: Story<TeamsModalComponent> = (args: TeamsModalComponent) => ({
  component: TeamsModalComponent,
  props: args,
  template: `
  <app-teams-modal 
    [title]="title" 
    [primaryButtonTitle]="primaryButtonTitle"
    [dangerButtonTitle]="dangerButtonTitle"
    (primaryButtonFunction)="primaryButtonFunction()"
    (dangerButtonFunction)="dangerButtonFunction()"
    (closeModal)="closeModal()"
  >
    <p 
      class="teams-cards-list__input-title fs-16-sofia-300" 
      [ngStyle]="{ 'text-align': 'left',
                  'color': 'rgba(var(--secondary-color-code), 0.5)',
                  'margin': '16px 0 8px',
                  'line-height': '150%'
                }"
    >
      User name
    </p>
    <app-teams-input
      [placeholderText]="'Stiven Stivenson'"
      [isBold]="true"
      [initialValue]="initialValue"
      [name]="initialValue"
      (changeValueParentFunction)="setValue($event, 'addTitle')"
    >
    </app-teams-input>
    <p 
      class="teams-cards-list__input-title fs-16-sofia-300"
      [ngStyle]="{ 'text-align': 'left',
                  'color': 'rgba(var(--secondary-color-code), 0.5)',
                  'margin': '16px 0 8px',
                  'line-height': '150%'
                }"
    >
      Domain
    </p>
    <app-teams-input
      [placeholderText]="'optiona'"
      [isBold]="true"
      [initialValue]="initialValue"
      [name]="initialValue"
      (changeValueParentFunction)="setValue($event, 'addText')"
    >
    </app-teams-input>
    <p 
      class="teams-cards-list__input-title fs-16-sofia-300"
      [ngStyle]="{ 'text-align': 'left',
                  'color': 'rgba(var(--secondary-color-code), 0.5)',
                  'margin': '16px 0 8px',
                  'line-height': '150%'
                }"
    >
      Position
    </p>
    <app-teams-input
      [placeholderText]="'manager'"
      [isBold]="true"
      [initialValue]="initialValue"
      [name]="initialValue"
      (changeValueParentFunction)="setValue($event, 'addPosition')"
    >
    </app-teams-input>
  </app-teams-modal>
  `,
});

export const Delete = Template.bind({});
Delete.args = {
  title: 'Delete user',
  primaryButtonTitle: '',
  dangerButtonTitle: 'delete',
  primaryButtonFunction: () => console.log('primary button function works'),
  dangerButtonFunction: () => console.log('danger button function works'),
  closeModal: () => console.log('close function works'),
};

export const Rename = Template.bind({});
Rename.args = {
  title: 'Rename user',
  primaryButtonTitle: 'rename',
  dangerButtonTitle: '',
  primaryButtonFunction: () => console.log('primary button function works'),
  dangerButtonFunction: () => console.log('danger button function works'),
  closeModal: () => console.log('close function works'),
};

export const Add = Template2.bind({});
Add.args = {
  title: 'Add user',
  primaryButtonTitle: 'Add',
  dangerButtonTitle: '',
  primaryButtonFunction: () => console.log('primary button function works'),
  dangerButtonFunction: () => console.log('danger button function works'),
  closeModal: () => console.log('close function works'),
};

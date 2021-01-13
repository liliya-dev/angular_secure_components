import { CommonModule } from '@angular/common';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { TeamsModalComponent } from './teams-modal.component';
import { TeamsSimpleButtonComponent } from '../../buttons/teams-simple-button/teams-simple-button.component';
import { TeamsInputComponent } from '../../inputs/teams-input/teams-input.component';
import { TeamsSelectInput } from '../../inputs/teams-select-input/teams-select-input.component';
import { NgSelectModule } from '@ng-select/ng-select';

const props = {};

export default {
  title: 'Teams/Atoms/ Modals ',
  decorators: [
    moduleMetadata({
      declarations: [
        TeamsModalComponent,
        TeamsSimpleButtonComponent,
        TeamsInputComponent,
        TeamsSelectInput
      ],
      imports: [CommonModule, NgSelectModule],
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
    <p class="fs-16-sofia-300">Are you sure you want to remove a team member <strong>Anton Ivanov</strong> from the administrators list?</p>
  </app-teams-modal>
  `,
});

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
      [ngStyle]="{ 'text-align': 'left', 'color': 'rgba(1, 25, 73, 0.5)', 'margin': '16px 0 8px', 'line-height': '150%' }"
    >
      Name
    </p>
    <app-teams-input
      [placeholderText]="''"
      [initialValue]="'Anton Ivanov'"
      [name]="initialValue"
      (changeValueParentFunction)="setValue($event, 'editTitle')"
    >
    </app-teams-input>
    <p 
      class="teams-cards-list__input-title fs-16-sofia-300"
      [ngStyle]="{ 'text-align': 'left', 'color': 'rgba(1, 25, 73, 0.5)', 'margin': '16px 0 8px', 'line-height': '150%' }"
    >
      Email
    </p>
    <app-teams-input
      [placeholderText]="''"
      [initialValue]="'secure.privacy@gmail.com'"
      [name]="initialValue"
      (changeValueParentFunction)="setValue($event, 'editEmail')"
    >
    </app-teams-input>
    <p 
      [ngStyle]="{ 'text-align': 'left', 'color': 'rgba(1, 25, 73, 0.5)', 'margin': '16px 0 8px', 'line-height': '150%' }"
      class="teams-cards-list__input-title fs-16-sofia-300"
    >
      Access
    </p>
    <teams-select-input
      [initialValue]="'Account owner'"
      [items]="['Account owner', 'Account manager', 'Account user']"
      [id]="'position'"
      (changeValueParentFunction)="null"
    >
    </teams-select-input>
  </app-teams-modal>
  `,
});

export const Delete = Template.bind({});
Delete.args = {
  title: 'Are you sure?',
  primaryButtonTitle: '',
  dangerButtonTitle: 'delete user',
  primaryButtonFunction: () => console.log('primary button function works'),
  dangerButtonFunction: () => console.log('danger button function works'),
  closeModal: () => console.log('close function works'),
};

export const Rename = Template2.bind({});
Rename.args = {
  title: 'Edit user',
  primaryButtonTitle: 'Save',
  dangerButtonTitle: 'cancel',
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

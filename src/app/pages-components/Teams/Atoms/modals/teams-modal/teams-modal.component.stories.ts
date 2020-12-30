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

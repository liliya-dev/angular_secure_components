import { CommonModule } from '@angular/common';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { ApproveModalComponent } from './approve-modal.component';
import { simpleButtonComponent } from '../../buttons/simpleButton/simpleButton.component';

const props = {};

export default {
  title: 'Atoms/Modal ',
  decorators: [
    moduleMetadata({
      declarations: [
        ApproveModalComponent,
        simpleButtonComponent
      ],
      imports: [CommonModule],
    }),
  ],
  argTypes: props,
} as Meta;

const Template: Story<ApproveModalComponent> = (args: ApproveModalComponent) => ({
  component: ApproveModalComponent,
  props: args,
  template: `
  <app-approve-modal 
    [title]="title" 
    [primaryButtonTitle]="primaryButtonTitle"
    [dangerButtonTitle]="dangerButtonTitle"
    (primaryButtonFunction)="primaryButtonFunction()"
    (dangerButtonFunction)="dangerButtonFunction()"
    (closeModal)="closeModal()"
  >
    <p class="fs-16-sofia-300">Do you really want to delete the <strong>Secure Privacy</strong></p>
  </app-approve-modal>
  `,
});

export const DeskApprove = Template.bind({});
DeskApprove.args = {
  title: 'Delete domain',
  primaryButtonTitle: 'exit',
  dangerButtonTitle: 'delete',
  primaryButtonFunction: () => console.log('primary button function works'),
  dangerButtonFunction: () => console.log('danger button function works'),
  closeModal: () => console.log('close function works'),
};

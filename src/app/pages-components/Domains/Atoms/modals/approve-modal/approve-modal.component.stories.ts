import { CommonModule } from '@angular/common';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { DomainsApproveModalComponent } from './approve-modal.component';
import { DomainsSimpleButtonComponent } from '../../buttons/simpleButton/simpleButton.component';

const props = {};

export default {
  title: 'Domains/Atoms/Modal ',
  decorators: [
    moduleMetadata({
      declarations: [
        DomainsApproveModalComponent,
        DomainsSimpleButtonComponent
      ],
      imports: [CommonModule],
    }),
  ],
  argTypes: props,
} as Meta;

const Template: Story<DomainsApproveModalComponent> = (args: DomainsApproveModalComponent) => ({
  component: DomainsApproveModalComponent,
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

export const Delete = Template.bind({});
Delete.args = {
  title: 'Delete domain',
  primaryButtonTitle: '',
  dangerButtonTitle: 'delete',
  primaryButtonFunction: () => console.log('primary button function works'),
  dangerButtonFunction: () => console.log('danger button function works'),
  closeModal: () => console.log('close function works'),
};

export const DeskApprove = Template.bind({});
DeskApprove.args = {
  title: 'Rename domain',
  primaryButtonTitle: 'rename',
  dangerButtonTitle: '',
  primaryButtonFunction: () => console.log('primary button function works'),
  dangerButtonFunction: () => console.log('danger button function works'),
  closeModal: () => console.log('close function works'),
};

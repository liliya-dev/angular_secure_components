import { CommonModule } from '@angular/common';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { DomainsApproveModalComponent } from './approve-modal.component';
import { DomainsSimpleButtonComponent } from '../../buttons/simpleButton/simpleButton.component';
import { DomainsFormInputComponent } from '../../formInput/formInput.component';

const props = {};

export default {
  title: 'Domains/Atoms/Modal ',
  decorators: [
    moduleMetadata({
      declarations: [
        DomainsApproveModalComponent,
        DomainsSimpleButtonComponent,
        DomainsFormInputComponent
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

const Template2: Story<DomainsApproveModalComponent> = (args: DomainsApproveModalComponent) => ({
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
      <p 
        class="fs-16-sofia-300"
        [ngStyle]="{ 'text-align': 'left', 'color': 'rgba(1, 25, 73, 0.5)', 'margin': '16px 0 8px', 'line-height': '150%' }"
      >
        Domain name
      </p>
      <app-form-input
        [placeholderText]="'example.com'"
        [isBold]="true"
        [initialValue]="initialValue"
        [name]="initialValue"
        (changeValueParentFunction)="setValue($event, 'addTitle')"
      >
      </app-form-input>
      <p 
        class="fs-16-sofia-300"
        [ngStyle]="{ 'text-align': 'left', 'color': 'rgba(1, 25, 73, 0.5)', 'margin': '16px 0 8px', 'line-height': '150%' }"
      >
        Domain
      </p>
      <app-form-input
        [placeholderText]="'optiona'"
        [isBold]="true"
        [initialValue]="initialValue"
        [name]="initialValue"
        (changeValueParentFunction)="setValue($event, 'addText')"
      >
      </app-form-input>
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

export const Approve = Template.bind({});
Approve.args = {
  title: 'Rename domain',
  primaryButtonTitle: 'rename',
  dangerButtonTitle: '',
  primaryButtonFunction: () => console.log('primary button function works'),
  dangerButtonFunction: () => console.log('danger button function works'),
  closeModal: () => console.log('close function works'),
};

export const Add = Template2.bind({});
Add.args = {
  title: 'Add domain',
  primaryButtonTitle: 'add',
  dangerButtonTitle: '',
  primaryButtonFunction: () => console.log('primary button function works'),
  dangerButtonFunction: () => console.log('danger button function works'),
  closeModal: () => console.log('close function works'),
};
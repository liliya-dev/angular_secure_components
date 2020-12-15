import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { PoliciesPreviewContainerComponent } from './preview-container.component';

const props = {
  isOpen: { control: 'boolean' }
};

export default {
  title: 'Policies Generator/Atoms/Containers',
  decorators: [
    moduleMetadata({
      declarations: [PoliciesPreviewContainerComponent],
      imports: []
    }),
  ],
  argTypes: props,
} as Meta;


const Template: Story<PoliciesPreviewContainerComponent> = (args: PoliciesPreviewContainerComponent) => ({
  component: PoliciesPreviewContainerComponent,
  props: args,
  template: `
  <app-preview-container>
    <img src='assets/images/policyButtonImages/type1.png'>
  </app-preview-container>
  `,
});

export const Preview = Template.bind({});
Preview.args = {

};





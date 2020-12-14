import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { PreviewContainerComponent } from './preview-container.component';

const props = {
  isOpen: { control: 'boolean' }
};

export default {
  title: 'Atoms/Containers',
  decorators: [
    moduleMetadata({
      declarations: [PreviewContainerComponent],
      imports: []
    }),
  ],
  argTypes: props,
} as Meta;


const Template: Story<PreviewContainerComponent> = (args: PreviewContainerComponent) => ({
  component: PreviewContainerComponent,
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





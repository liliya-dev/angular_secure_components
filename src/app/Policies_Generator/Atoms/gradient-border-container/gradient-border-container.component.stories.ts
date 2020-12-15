import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { PoliciesGradientBorderContainerComponent } from './gradient-border-container.component';

const props = {
  isOpen: { control: 'boolean' }
};

export default {
  title: 'Policies Generator/Atoms/Containers/GradientBorder',
  decorators: [
    moduleMetadata({
      declarations: [PoliciesGradientBorderContainerComponent],
      imports: []
    }),
  ],
  argTypes: props,
} as Meta;


const Template: Story<PoliciesGradientBorderContainerComponent> = (args: PoliciesGradientBorderContainerComponent) => ({
  component: PoliciesGradientBorderContainerComponent,
  props: args,
  template: `
  <app-gradient-border-container [isSelected]="isSelected" [contentBgColor]="contentBgColor" [height]="height">
    <img src='assets/images/policyButtonImages/type1.png'>
  </app-gradient-border-container>
  `,
});

export const Selected = Template.bind({});
Selected.args = {
  isSelected: true,
  contentBgColor: '#EAEDF2',
  height: 70
};

export const Static = Template.bind({});
Static.args = {
  isSelected: false,
  contentBgColor: '#EAEDF2',
  height: 70
};

export const BigDarkSelected = Template.bind({});
BigDarkSelected.args = {
  isSelected: true,
  contentBgColor: '#D0DAEB',
  height: 81
};

export const BigDarkStatic = Template.bind({});
BigDarkStatic.args = {
  isSelected: false,
  contentBgColor: '#D0DAEB',
  height: 81
};



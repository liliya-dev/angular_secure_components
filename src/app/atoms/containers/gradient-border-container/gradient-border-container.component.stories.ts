import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { GradientBorderContainerComponent } from './gradient-border-container.component';

const props = {
  isOpen: { control: 'boolean' }
};

export default {
  title: 'Atoms/Containers/GradientBorder',
  decorators: [
    moduleMetadata({
      declarations: [GradientBorderContainerComponent],
      imports: []
    }),
  ],
  argTypes: props,
} as Meta;


const Template: Story<GradientBorderContainerComponent> = (args: GradientBorderContainerComponent) => ({
  component: GradientBorderContainerComponent,
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

export const DarkSelected = Template.bind({});
DarkSelected.args = {
  isSelected: true,
  contentBgColor: '#D0DAEB',
  height: 81
};

export const DarkStatic = Template.bind({});
DarkStatic.args = {
  isSelected: false,
  contentBgColor: '#D0DAEB',
  height: 81
};



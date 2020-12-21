import { Meta, Story } from '@storybook/angular';
import { ReportsLightButtonComponent } from './reports-light-button.component';

const props = {
  backgroundColor: { control: 'color' }
};

export default {
  title: 'Reports/Atoms/Button',
  component: ReportsLightButtonComponent,
  argTypes: props,
} as Meta;

const Template: Story<ReportsLightButtonComponent> = (args: ReportsLightButtonComponent) => ({
  component: ReportsLightButtonComponent,
  props: args,
});

export const Back = Template.bind({});
Back.args = {
  srcPath: "assets/images/back-icon.png"
};



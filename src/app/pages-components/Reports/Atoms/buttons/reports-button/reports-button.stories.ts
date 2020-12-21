import { Meta, Story } from '@storybook/angular';
import { ReportsButtonComponent } from './reports-button.component';

const props = {
  backgroundColor: { control: 'color' },
  color: { control: 'color' },
  title: { control: 'text' },
};

export default {
  title: 'Reports/Atoms/Button',
  component: ReportsButtonComponent,
  argTypes: props,
} as Meta;

const Template: Story<ReportsButtonComponent> = (args: ReportsButtonComponent) => ({
  component: ReportsButtonComponent,
  props: args,
});

export const DangerBig = Template.bind({});
DangerBig.args = {
  title: "cancel",
  classes: "btn-danger fs-12-sofia-800 btn-app btn-app--h46--wide"
};

export const SuccessBig = Template.bind({});
SuccessBig.args = {
  title: "save",
  classes: "btn-app--h46--wide btn-app btn-success fs-12-gramm-400"
};

export const Danger = Template.bind({});
Danger.args = {
  title: "clear",
  classes: "btn-danger fs-12-sofia-800 btn-app btn-app--h36"
};

export const Success = Template.bind({});
Success.args = {
  title: "save",
  classes: "btn-app--h36 btn-app btn-success fs-12-sofia-800"
};


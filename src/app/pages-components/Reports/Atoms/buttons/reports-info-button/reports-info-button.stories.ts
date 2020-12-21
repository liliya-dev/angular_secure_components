import { Meta, Story } from '@storybook/angular';
import { ReportsInfoButtonComponent } from './reports-info-button.component';

const props = {};

export default {
  title: 'Reports/Atoms/Button',
  component: ReportsInfoButtonComponent,
  argTypes: props,
} as Meta;

const Template: Story<ReportsInfoButtonComponent> = (args: ReportsInfoButtonComponent) => ({
  component: ReportsInfoButtonComponent,
  props: args,
});

export const Info = Template.bind({});
Info.args = {
  title: "support",
};


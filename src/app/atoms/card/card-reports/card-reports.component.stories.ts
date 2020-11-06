import { Meta, Story } from '@storybook/angular';
import { CardReportsComponent } from './card-reports.component';

const props = {
  title: { control: 'text' },
  value: { control: 'text' },
  text: { control: 'text' },
  iconSrc: { control: 'text' }
};

export default {
  title: 'Atoms/Card',
  component: CardReportsComponent,
  argTypes: props,
} as Meta;

const Template: Story<CardReportsComponent> = (args: CardReportsComponent) => ({
  component: CardReportsComponent,
  props: args,
});

export const CardReports = Template.bind({});
CardReports.args = {
  title: "rejected all",
  text: 'except essential',
  value: '543 457',
  iconSrc: 'assets/images/report-card/state=Accepted.png'
};
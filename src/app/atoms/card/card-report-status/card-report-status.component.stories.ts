import { Meta, Story } from '@storybook/angular';
import { CardReportStatusComponent } from './card-report-status.component';

const props = {};

export default {
  title: 'Atoms/Card',
  component: CardReportStatusComponent,
  argTypes: props,
} as Meta;

const Template: Story<CardReportStatusComponent> = (args: CardReportStatusComponent) => ({
  component: CardReportStatusComponent,
  props: args,
});

export const ReportStatus = Template.bind({});
ReportStatus.args = {
  title: "12 aug 2020",
  texts: [
    { text: 'totlal', value: '25%' },
    { text: 'consent', value: '2629' },
    { text: 'opt-in', value: '1629' },
    { text: 'opt-out', value: '1000' },
  ]
};
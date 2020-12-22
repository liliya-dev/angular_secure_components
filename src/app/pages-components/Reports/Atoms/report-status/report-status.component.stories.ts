import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { ReportStatusComponent } from './report-status.component';

const props = {};

export default {
  title: 'Reports/Atoms/Status',
  decorators: [
    moduleMetadata({
      declarations: [ReportStatusComponent],
      imports: []
    }),
  ],
  argTypes: props,
} as Meta;

const Template: Story<ReportStatusComponent> = (args: ReportStatusComponent) => ({
  component: ReportStatusComponent,
  props: args,
});

export const Decline = Template.bind({});
Decline.args = {
  status: 'decline'
};

export const Accept = Template.bind({});
Accept.args = {
  status: 'accept'
};

export const NonSelected = Template.bind({});
NonSelected.args = {
  status: 'non-selected'
};


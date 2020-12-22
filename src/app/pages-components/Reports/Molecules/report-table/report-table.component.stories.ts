import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { ReportTableComponent } from './report-table.component';
import { ReportStatusComponent } from '../../Atoms/report-status/report-status.component';
import { ReportsCheckboxInput } from '../../Atoms/inputs/reports-checkbox-input/reports-checkbox-input.component';

const props = {};

export default {
  title: 'Reports/Molecules',
  decorators: [
    moduleMetadata({
      declarations: [ReportTableComponent, ReportStatusComponent, ReportsCheckboxInput],
      imports: []
    }),
  ],
  argTypes: props,
} as Meta;

const Template: Story<ReportTableComponent> = (args: ReportTableComponent) => ({
  component: ReportTableComponent,
  props: args,
});

export const Table = Template.bind({});
Table.args = {
  initialData: [
    { id: 1, category: 'Advertising', date: 1586933519000, status: 'accept', os: 'Linux, Android 9: Moto g', city: 'Chilie', state: 'Santiago Metropoli' },
    { id: 2, category: 'Advertising', date: 1584933599000, status: 'decline', os: 'Linux, Android 9: Moto g', city: 'Chilie', state: 'Santiago Metropoli' },
    { id: 3, category: 'Advertising', date: 1583923419000, status: 'accept', os: 'Linux, Android 9: Moto g', city: 'Chilie', state: 'Santiago Metropoli' },
    { id: 4, category: 'Advertising', date: 1581938519000, status: 'non-selected', os: 'Linux, Android 9: Moto g', city: 'Chilie', state: 'Santiago Metropoli' },
    { id: 5, category: 'Advertising', date: 1584933519000, status: 'non-selected', os: 'Linux, Android 9: Moto g', city: 'Chilie', state: 'Santiago Metropoli' },
    { id: 6, category: 'Advertising', date: 1586953519000, status: 'decline', os: 'Linux, Android 9: Moto g', city: 'Chilie', state: 'Santiago Metropoli' },
    { id: 7, category: 'Advertising', date: 1586933519000, status: 'accept', os: 'Linux, Android 9: Moto g', city: 'Chilie', state: 'Santiago Metropoli' },
    { id: 8, category: 'Advertising', date: 1586933519000, status: 'decline', os: 'Linux, Android 9: Moto g', city: 'Chilie', state: 'Santiago Metropoli' },
    { id: 9, category: 'Advertising', date: 1586233519000, status: 'non-selected', os: 'Linux, Android 9: Moto g', city: 'Chilie', state: 'Santiago Metropoli' },
    { id: 10, category: 'Advertising', date: 1586933719000, status: 'accept', os: 'Linux, Android 9: Moto g', city: 'Chilie', state: 'Santiago Metropoli' },
  ],
  headers: [
    { name: 'Category', id: 'category' },
    { name: 'Date & Time', id: 'date' },
    { name: 'Status', id: 'status' },
    { name: 'OS', id: 'os' },
    { name: 'City', id: 'city' },
    { name: 'State', id: 'state' }
  ],
  selected: [ 1, 5 ]
};


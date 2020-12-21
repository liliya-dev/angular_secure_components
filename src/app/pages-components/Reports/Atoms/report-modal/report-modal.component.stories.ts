import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { ReportModalComponent } from './report-modal.component';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { NgSelectModule } from '@ng-select/ng-select';
import { ReportsSearchInputComponent } from '../inputs/reports-search-input/reports-search-input.component';
import { ReportsSelectInput } from '../inputs/reports-select-input/reports-select-input.component';
import { ReportsButtonComponent } from '../buttons/reports-button/reports-button.component';

const props = {};

export default {
  title: 'Reports/Atoms/Modals',
  decorators: [
    moduleMetadata({
      declarations: [ReportModalComponent, ReportsSearchInputComponent, ReportsSelectInput, ReportsButtonComponent],
      imports: [CommonModule, HttpClientModule, AngularSvgIconModule.forRoot(), NgSelectModule]
    }),
  ],
  argTypes: props,
} as Meta;

const Template: Story<ReportModalComponent> = (args: ReportModalComponent) => ({
  component: ReportModalComponent,
  props: args,
});

export const Filter = Template.bind({});
Filter.args = {
  inputsData: [
    { id: '1', title: 'Category', type: 'select', values: ['All categories', 'Category 2', 'Category 3'], initialValue: 'All categories' },
    { id: '2', title: 'Device', type: 'select', values: ['All devices', 'Devices 2', 'Divices 3'], initialValue: 'All devices' },
    { id: '3', title: 'Region', type: 'select', values: ['World', 'Europe', 'Asia'], initialValue: 'World' },
    { id: '4', title: 'IP Addresses', type: 'search', placeholder: 'Address', initialValue: 'All addresses' },
    { id: '5', title: 'Plugin/Host', type: 'select', values: ['All Plugins & Hosts', 'Plugin 2', 'Plugin 3'], initialValue: 'All Plugins & Hosts' },
    { id: '6', title: 'Cookie', type: 'select', values: ['All Cookies', 'Cookie 2', 'Cookie 3'], initialValue: 'All Cookies' },
  ],
  primaryButtonFunction: () => console.log('primary button Works'),
  dangerButtonFunction: () => console.log('danger button Works')
};

export const Filter2 = Template.bind({});
Filter2.args = {
  inputsData: [
    { id: '1', title: 'Category', type: 'select', values: ['All categories', 'Category 2', 'Category 3'], initialValue: 'All categories' },
    { id: '2', title: 'Date & Time', type: 'select', values: ['Apr 15, 2020', 'Apr 16, 2020', 'Apr 13, 2020'], initialValue: 'Apr 15, 2020' },
    { id: '3', title: 'Status', type: 'select', values: ['Accept', 'Reject', 'Pending'], initialValue: 'Accept' },
    { id: '4', title: 'OS', type: 'select', values: ['Linux', 'Windows', 'Unix'], initialValue: 'Linux' },
    { id: '5', title: 'City', type: 'select', values: ['Nevada', 'Orlando', 'New Jersey'], initialValue: 'Nevada' },
    { id: '6', title: 'State', type: 'select', values: ['Santiago Metropoli', 'Nebraska', 'Alabama'], initialValue: 'Santiago Metropoli' },
  ],
  primaryButtonFunction: () => console.log('primary button Works'),
  dangerButtonFunction: () => console.log('danger button Works')
};

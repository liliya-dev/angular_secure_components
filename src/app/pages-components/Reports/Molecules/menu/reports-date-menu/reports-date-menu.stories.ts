import { CommonModule } from '@angular/common';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { ReportsTextLinkComponent } from '../../../Atoms/links/reports-text-link/reports-text-link.component';
import { ReportsDateMenuComponent } from './reports-date-menu.component';

const props = {
  backgroundColor: { control: 'color' },
  items: { control: 'array' }
};

export default {
  title: 'Reports/Molecules/Menu',
  decorators: [
    moduleMetadata({
      declarations: [ReportsDateMenuComponent, ReportsTextLinkComponent],
      imports: [CommonModule],
    }),
  ],
  argTypes: props,
} as Meta;

const Template: Story<ReportsDateMenuComponent> = (args: ReportsDateMenuComponent) => ({
  component: ReportsDateMenuComponent,
  props: args,
});

export const Date = Template.bind({});
Date.args = {
  items: ['today', 'this week', 'this month', 'this year']
};
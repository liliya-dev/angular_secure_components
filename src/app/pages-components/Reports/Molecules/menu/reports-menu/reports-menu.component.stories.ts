import { CommonModule } from '@angular/common';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { ReportsTextLinkComponent } from '../../../Atoms/links/reports-text-link/reports-text-link.component';
import { ReportsMenuComponent } from './reports-menu.component';

const props = {
  backgroundColor: { control: 'color' },
  items: { control: 'array' }
};

export default {
  title: 'Reports/Molecules/Menu',
  decorators: [
    moduleMetadata({
      declarations: [ReportsMenuComponent, ReportsTextLinkComponent],
      imports: [CommonModule],
    }),
  ],
  argTypes: props,
} as Meta;

const Template: Story<ReportsMenuComponent> = (args: ReportsMenuComponent) => ({
  component: ReportsMenuComponent,
  props: args,
});

export const Menu = Template.bind({});
Menu.args = {
  items: ['reports', 'domains', 'users', 'account', 'request portal']
};


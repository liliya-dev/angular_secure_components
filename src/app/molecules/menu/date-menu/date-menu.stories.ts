import { CommonModule } from '@angular/common';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { navLinkComponent } from '../../../atoms/navLink/textLinks/navLink.component';
import { DateMenuComponent } from './date-menu.component';

const props = {
  backgroundColor: { control: 'color' },
  items: { control: 'array' }
};

export default {
  title: 'Molecules/Menu',
  decorators: [
    moduleMetadata({
      declarations: [DateMenuComponent, navLinkComponent],
      imports: [CommonModule],
    }),
  ],
  argTypes: props,
} as Meta;

const Template: Story<DateMenuComponent> = (args: DateMenuComponent) => ({
  component: DateMenuComponent,
  props: args,
});

export const Date = Template.bind({});
Date.args = {
  items: ['today', 'this week', 'this month', 'this year']
};


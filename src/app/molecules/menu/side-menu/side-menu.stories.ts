import { CommonModule } from '@angular/common';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { navLinkComponent } from '../../../atoms/navLink/textLinks/navLink.component';
import { SideMenuComponent } from './side-menu.component';

const props = {
  backgroundColor: { control: 'color' },
  items: { control: 'array' }
};

export default {
  title: 'Molecules/Menu',
  decorators: [
    moduleMetadata({
      declarations: [SideMenuComponent, navLinkComponent],
      imports: [CommonModule],
    }),
  ],
  argTypes: props,
} as Meta;

const Template: Story<SideMenuComponent> = (args: SideMenuComponent) => ({
  component: SideMenuComponent,
  props: args,
});

export const Side = Template.bind({});
Side.args = {
  items: ['Opt-in vs Opt-out', 'consents by device', 'consents by category', 'consents by region', 'detailed consents']
};


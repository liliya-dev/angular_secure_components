import { CommonModule } from '@angular/common';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { TabMenuComponent } from './tab-menu.component';


const props = {
  items: { control: 'object' }
};

export default {
  title: 'Molecules/Menu',
  decorators: [
    moduleMetadata({
      declarations: [TabMenuComponent],
      imports: [CommonModule],
    }),
  ],
  argTypes: props,
} as Meta;

const Template: Story<TabMenuComponent> = (args: TabMenuComponent) => ({
  component: TabMenuComponent,
  props: args,
});

export const Tab = Template.bind({});
Tab.args = {
  titles: ['Latest scan report', 'Scan report', ' Scan report third']
};
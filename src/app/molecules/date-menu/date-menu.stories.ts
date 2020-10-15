import { action } from '@storybook/addon-actions';
import { Meta, Story } from '@storybook/angular';
import { DateMenuComponent } from './date-menu.component';

const props = {
  backgroundColor: { control: 'color' },
};

export default {
    title: 'Molecules/Date Menu',
    component: DateMenuComponent,
    argTypes: props,
  } as Meta;

const Template: Story<DateMenuComponent> = (args: DateMenuComponent) => ({
    component: DateMenuComponent,
    props: args,
  });

  export const Simple = Template.bind({});
  Simple.args = {
    
  };


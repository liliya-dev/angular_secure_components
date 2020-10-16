import { action } from '@storybook/addon-actions';
import { Meta, Story } from '@storybook/angular';
import { DateMenuModule } from './date-menu.module';

const props = {
  backgroundColor: { control: 'color' },
};

export default {
    title: 'Molecules/DateMenu',
    component: DateMenuModule,
    argTypes: props,
  } as Meta;

const Template: Story<DateMenuModule> = (args: DateMenuModule) => ({
    component: DateMenuModule,
    props: args,
  });

  export const Simple = Template.bind({});
  Simple.args = {
    
  };


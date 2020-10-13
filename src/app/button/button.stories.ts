import { action } from '@storybook/addon-actions';
import { Meta, Story } from '@storybook/angular';
import { Button } from 'protractor';
import { ButtonComponent } from './button.component';

export default {
    title: 'Atoms/Button',
    component: ButtonComponent,
    argTypes: {
      backgroundColor: { control: 'color' },
    },
  } as Meta;

const Template: Story<ButtonComponent> = (args: ButtonComponent) => ({
    component: ButtonComponent,
    props: args,
  });
  
  export const Primary = Template.bind({});
  Primary.args = {
    title: "button title",
  };

  export const Secondary = Template.bind({});
  Secondary.args = {
    title: "Secondary"
  };

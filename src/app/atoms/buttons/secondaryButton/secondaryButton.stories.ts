import { action } from '@storybook/addon-actions';
import { Meta, Story } from '@storybook/angular';
import { secondaryButtonComponent } from './secondaryButton.component';

const props = {
  backgroundColor: { control: 'color' },
  color: { control: 'color' },
  title: { control: 'text'},
};

export default {
    title: 'Atoms/Button',
    component: secondaryButtonComponent,
    argTypes: props,
  } as Meta;

const Template: Story<secondaryButtonComponent> = (args: secondaryButtonComponent) => ({
    component: secondaryButtonComponent,
    props: args,
  });

  export const Secondary = Template.bind({});
  Secondary.args = {
    title: "Filters",
    classes: "btn-secondary btn-app btn-app--h46 fs-16-sofia-300"
  };


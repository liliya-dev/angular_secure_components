import { action } from '@storybook/addon-actions';
import { Meta, Story } from '@storybook/angular';
import { gradientButtonComponent } from './gradientButton.component';

const props = {
  backgroundColor: { control: 'color' },
  color: { control: 'color' },
  title: { control: 'text'},
};

export default {
    title: 'Atoms/Button',
    component: gradientButtonComponent,
    argTypes: props,
  } as Meta;

const Template: Story<gradientButtonComponent> = (args: gradientButtonComponent) => ({
    component: gradientButtonComponent,
    props: args,
  });

  export const Gradient = Template.bind({});
  Gradient.args = {
    title: "clear",
    classes: "btn-app--asimetric btn-app btn-grad fs-16-sofia-800"
  };


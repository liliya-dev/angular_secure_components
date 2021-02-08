import { Meta, Story } from '@storybook/angular';
import { CookieLayoutCardComponent } from './cookie-layout-card.component';

const props = {
  title: { control: 'text' },
};

export default {
  title: 'Cookie Banner/Atoms/Layout Cards',
  component: CookieLayoutCardComponent,
  argTypes: props,
} as Meta;

const Template: Story<CookieLayoutCardComponent> = (args: CookieLayoutCardComponent) => ({
  component: CookieLayoutCardComponent,
  props: args,
});

export const Bottom = Template.bind({});
Bottom.args = {
  isSelected: true,
  width: '100%',
  heigth: '24px',
  top: 'calc(100% - 24px)',
  left: '0',
  borderRadius: '4px 4px 8px 8px'
};

export const Left = Template.bind({});
Left.args = {
  isSelected: true,
  width: '40px',
  heigth: '100%',
  top: '0',
  left: '0',
  borderRadius: '8px 4px 4px 8px'
};

export const LeftCorner = Template.bind({});
LeftCorner.args = {
  isSelected: true,
  width: '52px',
  heigth: '30px',
  top: 'calc(50% + 3px)',
  left: 'calc(50% - 65px)',
  borderRadius: '4px'
};

export const Center = Template.bind({});
Center.args = {
  isSelected: true,
  width: '78px',
  heigth: '65px',
  top: 'calc(50% - 32.5px)',
  left: 'calc(50% - 39px)',
  borderRadius: '4px'
};


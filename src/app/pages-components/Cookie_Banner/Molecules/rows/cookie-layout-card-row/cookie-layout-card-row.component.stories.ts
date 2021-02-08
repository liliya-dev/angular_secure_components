import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { CookieLayoutCardRowComponent } from './cookie-layout-card-row.component';
import { CookieLayoutCardComponent } from '../../../Atoms/cookie-layout-card/cookie-layout-card.component';

const props = {};

export default {
  title: 'Cookie Banner/Moleules/Card rows',
  decorators: [
    moduleMetadata({
      declarations: [
        CookieLayoutCardRowComponent,
        CookieLayoutCardComponent
      ],
      imports: [],
    }),
  ],
  argTypes: props,
} as Meta;

const Template: Story<CookieLayoutCardRowComponent> = (args: CookieLayoutCardRowComponent) => ({
  component: CookieLayoutCardRowComponent,
  props: args,
});

export const Layout = Template.bind({});
Layout.args = {
  initialSelectedId: 'second',
  items: [
    {
      id: 'first',
      width: '52px',
      heigth: '30px',
      top: 'calc(50% + 3px)',
      left: 'calc(50% - 65px)',
      borderRadius: '4px'
    },
    {
      id: 'second',
      width: '78px',
      heigth: '65px',
      top: 'calc(50% - 32.5px)',
      left: 'calc(50% - 39px)',
      borderRadius: '4px'
    },
    {
      id: 'third',
      width: '40px',
      heigth: '100%',
      top: '0',
      left: '0',
      borderRadius: '8px 4px 4px 8px'
    },
    {
      id: 'fourth',
      width: '100%',
      heigth: '24px',
      top: 'calc(100% - 24px)',
      left: '0',
      borderRadius: '4px 4px 8px 8px'
    },
    {
      id: 'fifth',
      width: 'calc(100%)',
      heigth: '24px',
      top: 'calc(100% - 28px)',
      keft: '0',
      borderRadius: '4px 4px 8px 8px'
    }
  ]
};
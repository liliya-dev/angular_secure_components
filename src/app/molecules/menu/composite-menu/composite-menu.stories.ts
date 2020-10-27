import { CommonModule } from '@angular/common';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { navLinkComponent } from '../../../atoms/navLink/textLinks/navLink.component';
import { CompositeMenuComponent } from './composite-menu.component';

const props = {
  items: { control: 'object' }
};

export default {
  title: 'Molecules/Menu',
  decorators: [
    moduleMetadata({
      declarations: [CompositeMenuComponent, navLinkComponent],
      imports: [CommonModule],
    }),
  ],
  argTypes: props,
} as Meta;

const Template: Story<CompositeMenuComponent> = (args: CompositeMenuComponent) => ({
  component: CompositeMenuComponent,
  props: args,
});

export const CompositeMenu = Template.bind({});
CompositeMenu.args = {
  items: [
    { title: 'scan'},
    { title: 'style'},
    { title: 'cookie banner'},
    { title: 'IAB 2.0 settings'},
    { title: 'Preference Center', sections: ['GDPR/ePrivacy', 'CCPA', 'LGPD']},
    { title: 'data request form'},
    { title: 'Preference Center', sections: ['Privacy Policy', 'Cookie Declaration', 'Embed On Website']},
    { title: 'cookie classification'},
    { title: 'languages'},
    { title: 'coverage'},
    { title: 'installation'},
  ]
};
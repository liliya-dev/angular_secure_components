import { CommonModule } from '@angular/common';
import { action } from '@storybook/addon-actions';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { navLinkComponent } from '../../atoms/navLink/navLink.component';
import { DateMenuComponent } from './date-menu.component';

const props = {
  backgroundColor: { control: 'color' },
};

export default {
    title: 'Molecules/Date Menu',
    decorators: [
      moduleMetadata({
        declarations: [DateMenuComponent, navLinkComponent],
        imports: [CommonModule],
      }),
    ],
    argTypes: props,
  } as Meta;

const Template: Story<DateMenuComponent> = (args: DateMenuComponent) => ({
    component: DateMenuComponent,
    props: args,
  });

  export const Simple = Template.bind({});
  Simple.args = {

  };


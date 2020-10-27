import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { IconLinksComponent } from './icon-links.component';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

const props = {
  title: { control: 'text' },
  isActive: { control: 'boolean' }
};

export default {
  title: 'Atoms/NavLink',
  decorators: [
    moduleMetadata({
      declarations: [IconLinksComponent],
      imports: [CommonModule, HttpClientModule, AngularSvgIconModule.forRoot()]
    }),
  ],
  argTypes: props,
} as Meta;

const Template: Story<IconLinksComponent> = (args: IconLinksComponent) => ({
  component: IconLinksComponent,
  props: args,
});

export const Icon = Template.bind({});
Icon.args = {
  title: 'Domains',
  isActive: false,
  svgPath: 'assets/images/menu/Domains.svg'
};

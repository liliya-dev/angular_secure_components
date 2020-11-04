import { CommonModule } from '@angular/common';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { WhiteRoundedLayoutComponent } from './white-rounded-layout.component';
import { TabMenuComponent } from '../../menu/tab-menu/tab-menu.component';
import { TextWithAfterGradientLineComponent } from '../../../atoms/text/text-with-after-gradient-line/text-with-after-gradient-line.component';

const props = {};

export default {
  title: 'Molecules/Layouts ',
  decorators: [
    moduleMetadata({
      declarations: [
        WhiteRoundedLayoutComponent,
        TabMenuComponent,
        TextWithAfterGradientLineComponent
      ],
      imports: [CommonModule],
    }),
  ],
  argTypes: props,
} as Meta;

const Template: Story<WhiteRoundedLayoutComponent> = (args: WhiteRoundedLayoutComponent) => ({
  component: WhiteRoundedLayoutComponent,
  props: args,
  template: `
  <app-white-rounded-layout [titles]="titles">
    <app-text-with-after-gradient-line [title]="'scan report'"></app-text-with-after-gradient-line>
  </app-white-rounded-layout>
  `,
});

export const WhiteRounded = Template.bind({});
WhiteRounded.args = {
  titles: ['Latest scan report', 'Scan report', ' Scan report third']
}


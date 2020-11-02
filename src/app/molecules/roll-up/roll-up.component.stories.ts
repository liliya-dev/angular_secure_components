import { CommonModule } from '@angular/common';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { RollUpComponent } from './roll-up.component';
import { RoundIconComponent } from '../../atoms/icons/round-icon/round-icon.component';
import { TextWithGradientBackComponent } from '../../atoms/text/text-with-gradient-back/text-with-gradient-back.component';
import { TransparentTableComponent } from '../../atoms/tables/transparent-table/transparent-table.component';

const props = {};

export default {
  title: 'Molecules/Roll up ',
  decorators: [
    moduleMetadata({
      declarations: [
        RollUpComponent,
        TransparentTableComponent,
        TextWithGradientBackComponent,
        RoundIconComponent 
      ],
      imports: [CommonModule],
    }),
  ],
  argTypes: props,
} as Meta;

const Template: Story<RollUpComponent> = (args: RollUpComponent) => ({
  component: RollUpComponent,
  props: args,
  template: `
  <app-roll-up [title]="title" [number]="number">
    <app-transparent-table 
      [mainColumn]="'mainColumn'"
      [data]="data"
      [heads]="heads"
    >
      </app-transparent-table>
  </app-roll-up>
  `,
});

export const First = Template.bind({});
First.args = {
  title: 'Cookies',
  number: 6,
  heads: ["name", "host", "expirity", "service", "type", "blocking", "hq", "purpose", "certifications"],
  data: [{
      name: "IDE",
      host: ".doubleclick.net",
      expirity: "1 year",
      service: "Doubleclick",
      type: "Third party",
      blocking: false,
      hq: {
        type: 'image',
        path: 'assets/images/usaFlag.png'
      },
      certifications: {
        type: 'gradientText',
        data: ['EU-U.S. Privacy Shield', 'Swiss-U.SPrivacy Shield']
      },
      purpose: "This cookie carries out information about how the end user uses the website and any advertising that the and user may have seen before visiting the said website."
    },
    {
      name: "IDE",
      host: ".doubleclick.net",
      expirity: "1 year",
      service: "Doubleclick",
      type: "Third party",
      blocking: true,
      hq: {
        type: 'image',
        path: 'assets/images/usaFlag.png'
      },
      certifications: {
        type: 'gradientText',
        data: ['EU-U.S. Privacy Shield', 'Swiss-U.SPrivacy Shield']
      },
      purpose: "This cookie carries out information about how the end user uses the website and any advertising that the and user may have seen before visiting the said website."
    },
    {
      name: "IDE",
      host: ".doubleclick.net",
      expirity: "1 year",
      service: "Doubleclick",
      type: "Third party",
      blocking: true,
      hq: {
        type: 'image',
        path: 'assets/images/usaFlag.png'
      },
      certifications: {
        type: 'gradientText',
        data: ['EU-U.S', 'Swis']
      },
      purpose: "This cookie carries out information about how the end user uses the website and any advertising that the and user may have seen before visiting the said website."
    }
  ],
  mainColumn: "host",
};


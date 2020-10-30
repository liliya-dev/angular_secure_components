import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { TransparentTableComponent } from './transparent-table.component';
import { RoundIconComponent } from '../../icons/round-icon/round-icon.component';
import { TextWithGradientBackComponent } from '../../text/text-with-gradient-back/text-with-gradient-back.component';

const props = {
  percent: { control: 'array' },
};

export default {
  title: 'Atoms/Tables',
  decorators: [
    moduleMetadata({
      declarations: [
        TransparentTableComponent,
        RoundIconComponent,
        TextWithGradientBackComponent
      ],
      imports: [],
    }),
  ],
  argTypes: props,
} as Meta;


const Template: Story<TransparentTableComponent> = (args: TransparentTableComponent) => ({
  component: TransparentTableComponent,
  props: args,
});

export const Transparent = Template.bind({});
Transparent.args = {
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

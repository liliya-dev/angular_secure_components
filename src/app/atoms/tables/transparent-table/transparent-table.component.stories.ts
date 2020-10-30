import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { TransparentTableComponent } from './transparent-table.component';
import { RoundIconComponent } from '../../icons/round-icon/round-icon.component';

const props = {
  percent: { control: 'array' },
};

export default {
  title: 'Atoms/Tables',
  decorators: [
    moduleMetadata({
      declarations: [
        TransparentTableComponent,
        RoundIconComponent
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
  heads: ["name", "host", "expirity", "service", "type", "blocking", "purpose"],
  data: [{
    name: "IDE",
    host: ".doubleclick.net",
    expirity: "1 year",
    service: "Doubleclick",
    type: "Third party",
    blocking: false,
    purpose: "This cookie carries out information about how the end user uses the website and any advertising that the and user may have seen before visiting the said website."
  },
  {
    name: "IDE",
    host: ".doubleclick.net",
    expirity: "1 year",
    service: "Doubleclick",
    type: "Third party",
    blocking: true,
    purpose: "This cookie carries out information about how the end user uses the website and any advertising that the and user may have seen before visiting the said website."
  },
  {
    name: "IDE",
    host: ".doubleclick.net",
    expirity: "1 year",
    service: "Doubleclick",
    type: "Third party",
    blocking: true,
    purpose: "This cookie carries out information about how the end user uses the website and any advertising that the and user may have seen before visiting the said website."
  }
],
  mainColumn: "name",
};

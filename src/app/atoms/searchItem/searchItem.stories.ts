import { action } from '@storybook/addon-actions';
import { Meta, Story } from '@storybook/angular';
import { searchItemComponent } from './searchItem.component';

const props = {
  title: { control: 'text' },
};

export default {
    title: 'Atoms/SearchItem',
    component: searchItemComponent,
    argTypes: props,
  } as Meta;

const Template: Story<searchItemComponent> = (args: searchItemComponent) => ({
    component: searchItemComponent,
    props: args,
  });

  export const Simple = Template.bind({});
  Simple.args = {
    title: "secureprivacy.ai",
    classes: "search-list__item fs-16-sofia-300"
  };

  export const WithIcon = Template.bind({});
  WithIcon.args = {
    title: "Get access to all features.",
    classes: "list-item-icon fs-16-sofia-300"
  };



import { Meta, Story } from '@storybook/angular';
import { CardWithColumnsTextComponent } from './card-with-columns-text.component';

const props = {};

export default {
  title: 'Atoms/Card',
  component: CardWithColumnsTextComponent,
  argTypes: props,
} as Meta;

const Template: Story<CardWithColumnsTextComponent> = (args: CardWithColumnsTextComponent) => ({
  component: CardWithColumnsTextComponent,
  props: args,
});

export const CardWithColumns = Template.bind({});
CardWithColumns.args = {
  title: 'Number of hosts your website connects to',
  values: [162, 20],
  texts: ["Total requests from your website", "Requesta causing behavioral tracking"]
};




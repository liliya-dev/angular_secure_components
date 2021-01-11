import { CommonModule } from '@angular/common';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { StatusBarComponent } from './status-bar.component';
import { StatusStepsDynamicComponent } from '../../atoms/status-steps-dynamic/status-steps-dynamic.component';
import { LightAssimetricButtonComponent } from '../../atoms/buttons/light-assimetric-button/light-assimetric-button.component';
import { simpleButtonComponent } from '../../atoms/buttons/simpleButton/simpleButton.component';

const props = {};

export default {
  title: 'Molecules/Status bar ',
  decorators: [
    moduleMetadata({
      declarations: [
        StatusBarComponent,
        StatusStepsDynamicComponent,
        LightAssimetricButtonComponent,
        simpleButtonComponent
      ],
      imports: [CommonModule],
    }),
  ],
  argTypes: props,
} as Meta;

const Template: Story<StatusBarComponent> = (args: StatusBarComponent) => ({
  component: StatusBarComponent,
  props: args
});

export const Green = Template.bind({});
Green.args = {
  activePoints: 1,
  totalSteps: 6,
}

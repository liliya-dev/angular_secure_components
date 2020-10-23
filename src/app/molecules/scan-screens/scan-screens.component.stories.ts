import { CommonModule } from '@angular/common';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { ScanScreensComponent } from './scan-screens.component';
import { simpleButtonComponent } from '../../atoms/buttons/simpleButton/simpleButton.component';
import { ScanAnimationComponent } from '../../atoms/scan-animation/scan-animation.component';
import { CheckboxInputSimpleComponent } from '../../atoms/inputs/checkbox/checkbox-input-simple/checkbox-input-simple.component';

const props = {
};

export default {
  title: 'Molecules/Scan Screen',
  decorators: [
    moduleMetadata({
      declarations: [
        ScanScreensComponent, 
        simpleButtonComponent, 
        CheckboxInputSimpleComponent,
        ScanAnimationComponent
      ],
      imports: [CommonModule],
    }),
  ],
  argTypes: props,
} as Meta;

const Template: Story<ScanScreensComponent> = (args: ScanScreensComponent) => ({
  component: ScanScreensComponent,
  props: args,
});

export const First = Template.bind({});
First.args = {
};


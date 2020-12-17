import { CommonModule } from '@angular/common';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { TextWithAfterGradientLineComponent } from '../../atoms/text/text-with-after-gradient-line/text-with-after-gradient-line.component';
import { ScanScreensComponent } from './scan-screens.component';
import { simpleButtonComponent } from '../../atoms/buttons/simpleButton/simpleButton.component';
import { ScanAnimationComponent } from '../../atoms/scan-animation/scan-animation.component';
import { CheckboxInputSimpleComponent } from '../../atoms/inputs/checkbox/checkbox-input-simple/checkbox-input-simple.component';

const props = {};

export default {
  title: 'Molecules/Scan Screen',
  decorators: [
    moduleMetadata({
      declarations: [
        ScanScreensComponent, 
        simpleButtonComponent, 
        CheckboxInputSimpleComponent,
        ScanAnimationComponent,
        TextWithAfterGradientLineComponent
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
  items: [
    'domain.com', 'domain.com/shop', 'domain.com/privacy', 'domain.com/1', 'domain.com/2', 'domain.com/3', 'domain.com',
    'domain.com/privacy', 'domain.com/1', 'domain.com/2', 'domain.com/3', 'domain.com'
  ]
};


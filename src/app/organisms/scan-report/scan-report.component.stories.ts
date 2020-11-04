import { CommonModule } from '@angular/common';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { ScanReportComponent } from './scan-report.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { simpleButtonComponent } from '../../atoms/buttons/simpleButton/simpleButton.component';
import { SelectInputSearchComponent } from '../../atoms/inputs/select-input/select-input-search/select-input-search.component'
import { navLinkComponent } from '../../atoms/navLink/textLinks/navLink.component';
import { infoButtonComponent } from '../../atoms/buttons/infoButton/infoButton.component';
import { lightButtonComponent } from '../../atoms/buttons/lightButton/lightButton.component';
import { CompositeMenuComponent } from '../../molecules/menu/composite-menu/composite-menu.component';
import { ScanAnimationComponent } from '../../atoms/scan-animation/scan-animation.component';
import { CheckboxInputSimpleComponent } from '../../atoms/inputs/checkbox/checkbox-input-simple/checkbox-input-simple.component';
import { MainNavigationMenuComponent } from '../../molecules/menu/main-navigation-menu/main-navigation-menu.component';
import { ScanScreensComponent } from '../../molecules/scan-screens/scan-screens.component';
import { MobileButtonComponent } from '../../atoms/buttons/mobile-button/mobile-button.component';
import { MobileMainNavigationMenuComponent } from '../../molecules/menu/mobile-main-navigation-menu/mobile-main-navigation-menu.component';
import { IconLinksComponent } from '../../atoms/navLink/icon-links/icon-links.component';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { HttpClientModule } from '@angular/common/http';
import { TextWithAfterGradientLineComponent } from '../../atoms/text/text-with-after-gradient-line/text-with-after-gradient-line.component';

const props = {};

export default {
  title: 'Organisms/Scan Report',
  decorators: [
    moduleMetadata({
      declarations: [
        navLinkComponent,
        infoButtonComponent,
        lightButtonComponent,
        CompositeMenuComponent,
        ScanAnimationComponent,
        CheckboxInputSimpleComponent,
        MainNavigationMenuComponent, 
        SelectInputSearchComponent,
        ScanScreensComponent,
        simpleButtonComponent,
        MobileButtonComponent,
        MobileMainNavigationMenuComponent,
        IconLinksComponent,
        TextWithAfterGradientLineComponent
      ],
      imports: [CommonModule, NgSelectModule, HttpClientModule, AngularSvgIconModule.forRoot()],
    }),
  ],
  argTypes: props,
} as Meta;

const Template: Story<ScanReportComponent> = (args: ScanReportComponent) => ({
  component: ScanReportComponent,
  props: args,
});

export const ScanReport = Template.bind({});
ScanReport.args = {};



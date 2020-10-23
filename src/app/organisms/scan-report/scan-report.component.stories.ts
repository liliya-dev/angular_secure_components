import { CommonModule } from '@angular/common';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { ScanReportComponent } from './scan-report.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { simpleButtonComponent } from '../../atoms/buttons/simpleButton/simpleButton.component';
import { SelectInputSearchComponent } from '../../atoms/inputs/select-input/select-input-search/select-input-search.component'
import { navLinkComponent } from '../../atoms/navLink/navLink.component';
import { infoButtonComponent } from '../../atoms/buttons/infoButton/infoButton.component';
import { lightButtonComponent } from '../../atoms/buttons/lightButton/lightButton.component';
import { CompositeMenuComponent } from '../../molecules/menu/composite-menu/composite-menu.component';
import { ScanAnimationComponent } from '../../atoms/scan-animation/scan-animation.component';
import { CheckboxInputSimpleComponent } from '../../atoms/inputs/checkbox/checkbox-input-simple/checkbox-input-simple.component';
import { MainNavigationMenuComponent } from '../../molecules/menu/main-navigation-menu/main-navigation-menu.component';
import { ScanScreensComponent } from '../../molecules/scan-screens/scan-screens.component';
const props = {
};

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
          simpleButtonComponent
        ],
        imports: [CommonModule, NgSelectModule],
        }),
    ],
    argTypes: props,
} as Meta;


const Template: Story<ScanReportComponent> = (args: ScanReportComponent) => ({
    component: ScanReportComponent,
    props: args,
});

export const ScanReport = Template.bind({});
ScanReport.args = {

};



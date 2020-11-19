import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { gradientButtonComponent } from './atoms/buttons/gradientButton/gradientButton.component';
import { largeButtonComponent} from './atoms/buttons/largeButton/largeButton.component';
import { simpleButtonComponent } from './atoms/buttons/simpleButton/simpleButton.component';
import { lightButtonComponent} from './atoms/buttons/lightButton/lightButton.component';
import { infoButtonComponent } from './atoms/buttons/infoButton/infoButton.component';
import { primaryButtonComponent } from './atoms/buttons/primaryButton/primaryButton.component';
import { secondaryButtonComponent } from './atoms/buttons/secondaryButton/secondaryButton.component';
import { DateMenuComponent } from './molecules/menu/date-menu/date-menu.component';
import { IconContainerComponent } from './atoms/iconContainer/iconContainer.component';
import { navLinkComponent } from './atoms/navLink/textLinks/navLink.component';
import { SideMenuComponent } from './molecules/menu/side-menu/side-menu.component';
import { CardComponent } from './atoms/card/card.component';
import { StepsComponent } from './atoms/steps/steps.component';
import { searchItemComponent } from './atoms/searchItem/searchItem.component';
import { formInputComponent } from './atoms/inputs/formInput/formInput.component';
import { FormScreenFirstComponent } from './molecules/form-screens/form-screen-first/form-screen-first.component';
import { FormScreenSecondComponent } from './molecules/form-screens/form-screen-second/form-screen-second.component';
import { FormScreenThirdComponent } from './molecules/form-screens/form-screen-third/form-screen-third.component';
import { FormScreenFourthComponent } from './molecules/form-screens/form-screen-fourth/form-screen-fourth.component';
import { FormScreenFifthComponent } from './molecules/form-screens/form-screen-fifth/form-screen-fifth.component';
import { RegistrationFormComponent } from './organisms/registration-form/registration-form.component';
import { SelectInputSimpleComponent } from './atoms/inputs/select-input/select-input-simple/select-input-simple.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { CheckboxInputSwitchComponent } from './atoms/inputs/checkbox/checkbox-input-switch/checkbox-input-switch.component';
import { ScanScreensComponent } from '../app/molecules/scan-screens/scan-screens.component';
import { CompositeMenuComponent } from './molecules/menu/composite-menu/composite-menu.component';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { HttpClientModule } from '@angular/common/http';
import { ScanAnimationComponent } from './atoms/scan-animation/scan-animation.component';
import { CheckboxInputSimpleComponent } from './atoms/inputs/checkbox/checkbox-input-simple/checkbox-input-simple.component';
import { ScanReportComponent } from './organisms/scan-report/scan-report.component';
import { SelectInputSearchComponent } from './atoms/inputs/select-input/select-input-search/select-input-search.component';
import { MainNavigationMenuComponent } from './molecules/menu/main-navigation-menu/main-navigation-menu.component';
import { MobileButtonComponent } from './atoms/buttons/mobile-button/mobile-button.component';
import { IconLinksComponent } from './atoms/navLink/icon-links/icon-links.component';
import { MobileMainNavigationMenuComponent } from './molecules/menu/mobile-main-navigation-menu/mobile-main-navigation-menu.component';
import { TextWithGradientBackComponent } from './atoms/text/text-with-gradient-back/text-with-gradient-back.component';
import { NgApexchartsModule } from "ng-apexcharts";
import { SemicircleChartComponent } from './atoms/semicircle-chart/semicircle-chart.component';
import { CardWithDonutChartComponent } from './atoms/card/card-with-donut-chart/card-with-donut-chart.component';
import * as PlotlyJS from 'plotly.js/dist/plotly.js';
import { PlotlyModule } from 'angular-plotly.js';
import { SemicircleChartCardComponent } from './atoms/card/semicircle-chart-card/semicircle-chart-card.component';
import { RoundIconComponent } from './atoms/icons/round-icon/round-icon.component';
import { CardWithColumnsTextComponent } from './atoms/card/card-with-columns-text/card-with-columns-text.component';
import { CardWithCenterTextComponent } from './atoms/card/card-with-center-text/card-with-center-text.component';
import { TransparentTableComponent } from './atoms/tables/transparent-table/transparent-table.component';
import { RollUpComponent } from './molecules/roll-up/roll-up.component';
import { CardRowComponent } from './molecules/card-row/card-row.component';
import { TextWithAfterGradientLineComponent } from './atoms/text/text-with-after-gradient-line/text-with-after-gradient-line.component';
import { TabMenuComponent } from './molecules/menu/tab-menu/tab-menu.component';
import { WhiteRoundedLayoutComponent } from './molecules/layouts/white-rounded-layout/white-rounded-layout.component';
import { GradientTextComponent } from './atoms/text/gradient-text/gradient-text.component';
import { SelectInputWithInitialValueComponent } from './atoms/inputs/select-input/select-input-with-initial-value/select-input-with-initial-value.component';
import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { ColorSketchModule } from 'ngx-color/sketch';
import { StatusStepsDynamicComponent } from './atoms/status-steps-dynamic/status-steps-dynamic.component';
import { StatusBarComponent } from './molecules/status-bar/status-bar.component';
import { MutableLightButtonComponent } from './atoms/buttons/domains-card-buttons/mutable-light-button/mutable-light-button.component';
import { MutablePrimaryButtonComponent } from './atoms/buttons/domains-card-buttons/mutable-primary-button/mutable-primary-button.component';
import { MutableDangerButtonComponent } from './atoms/buttons/domains-card-buttons/mutable-danger-button/mutable-danger-button.component';
import { MutableGradientIconButtonComponent } from './atoms/buttons/domains-card-buttons/mutable-gradient-icon-button/mutable-gradient-icon-button.component';
import { CheckboxMutableGradientComponent } from './atoms/inputs/checkbox/checkbox-mutable-gradient/checkbox-mutable-gradient.component';
import { OnboardingCardComponent } from './atoms/card/onboarding-card/onboarding-card.component';
import { OnboardingListComponent } from './molecules/onboarding-list/onboarding-list.component';
import { ApproveModalComponent } from './atoms/modals/approve-modal/approve-modal.component';
import { SmallLightAddButtonComponent } from './atoms/buttons/add-buttons/small-light-add-button/small-light-add-button.component';
import { DynamicTableComponent } from './atoms/tables/dynamic-table/dynamic-table.component';
import { DynamicListComponent } from './atoms/tables/dynamic-list/dynamic-list.component';
import { DarkAddButtonComponent } from './atoms/buttons/add-buttons/dark-add-button/dark-add-button.component';
import { CustomizedElementComponent } from './molecules/customized-element/customized-element.component';


const props = {};

export default {
  title: 'All/Components',
  decorators: [
    moduleMetadata({
      declarations: [
        DynamicTableComponent,
        SmallLightAddButtonComponent,
        DarkAddButtonComponent,
        DynamicListComponent,
        AppComponent,
        gradientButtonComponent,
        IconContainerComponent,
        DateMenuComponent,
        navLinkComponent,
        formInputComponent,
        simpleButtonComponent,
        secondaryButtonComponent,
        primaryButtonComponent,
        infoButtonComponent,
        lightButtonComponent,
        searchItemComponent,
        SideMenuComponent,
        CardComponent,
        StepsComponent,
        FormScreenFirstComponent,
        FormScreenSecondComponent,
        FormScreenThirdComponent,
        largeButtonComponent,
        FormScreenFourthComponent,
        FormScreenFifthComponent,
        RegistrationFormComponent,
        SelectInputSimpleComponent,
        CheckboxInputSwitchComponent,
        CompositeMenuComponent,
        ScanAnimationComponent,
        CheckboxInputSimpleComponent,
        ScanReportComponent,
        SelectInputSearchComponent,
        MainNavigationMenuComponent,
        MobileButtonComponent,
        IconLinksComponent,
        MobileMainNavigationMenuComponent,
        ScanScreensComponent,
        TextWithGradientBackComponent,
        SemicircleChartComponent,
        CardWithDonutChartComponent,
        SemicircleChartCardComponent,
        RoundIconComponent,
        CardWithColumnsTextComponent,
        CardWithCenterTextComponent,
        TransparentTableComponent,
        RollUpComponent,
        CardRowComponent,
        TextWithAfterGradientLineComponent,
        TabMenuComponent,
        WhiteRoundedLayoutComponent,
        GradientTextComponent,
        SelectInputWithInitialValueComponent
      ],
      entryComponents: [
        DynamicTableComponent,
        DynamicListComponent
     ],
      imports: [
        ColorSketchModule,
        FormsModule,
        NgSelectModule,
        AngularSvgIconModule.forRoot(),
        HttpClientModule,
        PlotlyModule,
        CommonModule,
        NgApexchartsModule
      ],
    }),
  ],
  argTypes: props,
} as Meta;

const Template: Story<AppComponent> = (args: AppComponent) => ({
  component: AppComponent,
  props: args,
});

export const Components = Template.bind({});
Components.args = {};



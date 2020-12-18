import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
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
import { CardReportsComponent } from './atoms/card/card-reports/card-reports.component';
import { SecondaryBorderButtonComponent } from './atoms/buttons/secondary-border-button/secondary-border-button.component';
import { SelectedItemComponent } from './atoms/filter-components/selected-item/selected-item.component';
import { CardReportStatusComponent } from './atoms/card/card-report-status/card-report-status.component';
import { SimpleCounterComponent } from './atoms/counters/simple-counter/simple-counter.component';
import { CheckboxCircleInputComponent } from './atoms/inputs/checkbox/checkbox-circle-input/checkbox-circle-input.component';
import { CheckboxInputDarkComponent } from './atoms/inputs/checkbox/checkbox-input-dark/checkbox-input-dark.component';
import { SimpleTextareaComponent } from './atoms/inputs/textarea/simple-textarea/simple-textarea.component';
import { LightAssimetricButtonComponent } from './atoms/buttons/light-assimetric-button/light-assimetric-button.component';
import { ColorSketchModule } from 'ngx-color/sketch';
import { gradientButtonComponent } from './atoms/buttons/gradientButton/gradientButton.component';
import { ColorPickerComponent } from './atoms/color-picker/color-picker.component';
import { StatusStepsDynamicComponent } from './atoms/status-steps-dynamic/status-steps-dynamic.component';
import { StatusBarComponent } from './molecules/status-bar/status-bar.component';
import { CheckboxMutableGradientComponent } from './atoms/inputs/checkbox/checkbox-mutable-gradient/checkbox-mutable-gradient.component';
import { SmallLightAddButtonComponent } from './atoms/buttons/add-buttons/small-light-add-button/small-light-add-button.component';
import { DarkAddButtonComponent } from './atoms/buttons/add-buttons/dark-add-button/dark-add-button.component';
import { AddComponent } from './pages-components/Policies_Customize/Molecules/customized-element/add-dynamic-component/add-dynamic.component';
import { AddDirective } from './pages-components/Policies_Customize/Molecules/customized-element/add-dynamic-component/add.directive';
import { AddService } from './pages-components/Policies_Customize/Molecules/customized-element/add-dynamic-component/add.service';
import { TextareaAutosizeModule } from 'ngx-textarea-autosize';
import { LinearChartComponent } from './atoms/charts/linear-chart/linear-chart.component';
import { ColumnChartComponent } from './atoms/charts/column-chart/column-chart.component';
import { MapChartComponent } from './atoms/charts/map-chart/map-chart.component';
import { RoundChartComponent } from './atoms/charts/round-chart/round-chart.component';
import { TextEditorComponent } from './pages-components/Data_Request_Form/Atoms/text-editor/text-editor.component';
import { TextareaCopyToClipboardComponent } from './atoms/inputs/textarea/textarea-copy-to-clipboard/textarea-copy-to-clipboard.component';
import { GradientBorderContainerComponent } from './atoms/containers/gradient-border-container/gradient-border-container.component';
import { PreviewContainerComponent } from './atoms/containers/preview-container/preview-container.component';
import { PoliciesGradientBorderContainerComponent } from './pages-components/Policies_Generator/Atoms/gradient-border-container/gradient-border-container.component';
import { PoliciesPreviewContainerComponent } from './pages-components/Policies_Generator/Atoms/preview-container/preview-container.component';
import { PoliciesTextareaCopyToClipboardComponent } from './pages-components/Policies_Generator/Atoms/textarea-copy-to-clipboard/textarea-copy-to-clipboard.component';
import { PoliciesColorPickerComponent } from './pages-components/Policies_Generator/Atoms/color-picker/color-picker.component';
import { PoliciesSelectInputWithInitialValueComponent } from './pages-components/Policies_Generator/Atoms/select-input/select-input-with-initial-value/select-input-with-initial-value.component';
import { PoliciesCheckboxInputDarkComponent } from './pages-components/Policies_Generator/Atoms/checkbox-input-dark/checkbox-input-dark.component';
import { PoliciesButtonComponent } from './pages-components/Policies_Generator/Atoms/buttons/policies-button.component';
import { PoliciesDynamicTextComponent } from './pages-components/Policies_Customize/Atoms/dynamic-text/dynamic-text.component'
import { PoliciesDynamicListComponent } from './pages-components/Policies_Customize/Atoms/dynamic-list/dynamic-list.component';
import { PoliciesDynamicTableComponent } from './pages-components/Policies_Customize/Atoms/dynamic-table/dynamic-table.component';
import { PoliciesSmallLightAddButtonComponent } from './pages-components/Policies_Customize/Atoms/buttons/small-light-add-button/small-light-add-button.component';
import { PoliciesDarkAddButtonComponent } from './pages-components/Policies_Customize/Atoms/buttons/dark-add-button/dark-add-button.component';
import { PoliciesCustomizedElementComponent } from './pages-components/Policies_Customize/Molecules/customized-element/customized-element.component';
import { PoliciesDynamicSectionsListComponent } from './pages-components/Policies_Customize/Organisms/dynamic-sections-list/dynamic-sections-list.component';
import { TemplateItemComponent } from './pages-components/Data_Request_Form/Atoms/template-item/template-item.component';
import { TemplatesListComponent } from './pages-components/Data_Request_Form/Molecules/templates-list/templates-list.component';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { DomainsMutablePrimaryButtonComponent } from './pages-components/Domains/Atoms/buttons/mutable-primary-button/mutable-primary-button.component';
import { DomainsMutableLightButtonComponent } from './pages-components/Domains/Atoms/buttons/mutable-light-button/mutable-light-button.component';
import { DomainsSimpleButtonComponent } from './pages-components/Domains/Atoms/buttons/simpleButton/simpleButton.component';
import { DomainsMutableDangerButtonComponent } from './pages-components/Domains/Atoms/buttons/mutable-danger-button/mutable-danger-button.component';
import { DomainsMutableGradientIconButtonComponent } from './pages-components/Domains/Atoms/buttons/mutable-gradient-icon-button/mutable-gradient-icon-button.component';
import { DomainsApproveModalComponent } from './pages-components/Domains/Atoms/modals/approve-modal/approve-modal.component';
import { DomainsCheckboxMutableGradientComponent } from './pages-components/Domains/Atoms/checkbox-mutable-gradient/checkbox-mutable-gradient.component';
import { DomainsOnboardingCardComponent } from './pages-components/Domains/Molecules/onboarding-card/onboarding-card.component';
import { DomainsOnboardingListComponent } from './pages-components/Domains/Organisms/onboarding-list/onboarding-list.component';
import { DomainsSvgButtonComponent } from './pages-components/Domains/Atoms/buttons/domains-svg-button/domains-svg-button.component';
import { DomainsSearchInputComponent } from './pages-components/Domains/Atoms/domains-search-input/domains-search-input.component';


PlotlyModule.plotlyjs = PlotlyJS;

@NgModule({
  entryComponents: [
    PoliciesDynamicTextComponent,
    PoliciesDynamicListComponent,
    PoliciesDynamicTableComponent
 ],
  providers: [AddService],
  declarations: [
    AddComponent,
    AddDirective,
    AppComponent,
    IconContainerComponent,
    gradientButtonComponent,
    DateMenuComponent,
    navLinkComponent,
    formInputComponent,
    simpleButtonComponent,
    secondaryButtonComponent,
    primaryButtonComponent,
    infoButtonComponent,
    lightButtonComponent,
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
    SelectInputWithInitialValueComponent,
    CardReportsComponent,
    SecondaryBorderButtonComponent,
    SelectedItemComponent,
    CardReportStatusComponent,
    SimpleCounterComponent,
    CheckboxCircleInputComponent,
    CheckboxInputDarkComponent,
    SimpleTextareaComponent,
    LightAssimetricButtonComponent,
    ColorPickerComponent,
    StatusStepsDynamicComponent,
    StatusBarComponent,
    CheckboxMutableGradientComponent,
    DomainsApproveModalComponent,
    SmallLightAddButtonComponent,
    DarkAddButtonComponent,
    LinearChartComponent,
    ColumnChartComponent,
    MapChartComponent,
    RoundChartComponent,
    TextEditorComponent,
    TextareaCopyToClipboardComponent,
    GradientBorderContainerComponent,
    PreviewContainerComponent,
    PoliciesGradientBorderContainerComponent,
    PoliciesPreviewContainerComponent,
    PoliciesTextareaCopyToClipboardComponent,
    PoliciesColorPickerComponent,
    PoliciesSelectInputWithInitialValueComponent,
    PoliciesCheckboxInputDarkComponent,
    PoliciesButtonComponent,
    PoliciesDynamicTextComponent,
    PoliciesDynamicListComponent,
    PoliciesDynamicTableComponent,
    PoliciesSmallLightAddButtonComponent,
    PoliciesDarkAddButtonComponent,
    PoliciesCustomizedElementComponent,
    PoliciesDynamicSectionsListComponent,
    TemplateItemComponent,
    TemplatesListComponent,
    DomainsSimpleButtonComponent,
    DomainsMutableGradientIconButtonComponent,
    DomainsMutableDangerButtonComponent,
    DomainsMutableLightButtonComponent,
    DomainsMutablePrimaryButtonComponent,
    DomainsCheckboxMutableGradientComponent,
    DomainsOnboardingCardComponent,
    DomainsOnboardingListComponent,
    DomainsSvgButtonComponent,
    DomainsSearchInputComponent
  ],
  imports: [
    ColorSketchModule,
    BrowserModule,
    FormsModule,
    NgSelectModule,
    AngularSvgIconModule.forRoot(),
    HttpClientModule,
    PlotlyModule,
    CommonModule,
    NgApexchartsModule,
    TextareaAutosizeModule,
    AngularEditorModule
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }

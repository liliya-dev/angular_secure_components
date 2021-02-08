import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { StatusStepsDynamicComponent } from './atoms/status-steps-dynamic/status-steps-dynamic.component';
import { StatusBarComponent } from './molecules/status-bar/status-bar.component';
import { AddComponent } from './pages-components/Policies_Customize/Molecules/customized-element/add-dynamic-component/add-dynamic.component';
import { AddDirective } from './pages-components/Policies_Customize/Molecules/customized-element/add-dynamic-component/add.directive';
import { AddService } from './pages-components/Policies_Customize/Molecules/customized-element/add-dynamic-component/add.service';
import { TextareaAutosizeModule } from 'ngx-textarea-autosize';
import { LinearChartComponent } from './pages-components/Reports/Molecules/charts/linear-chart/linear-chart.component';
import { ColumnChartComponent } from './pages-components/Reports/Molecules/charts/column-chart/column-chart.component';
import { MapChartComponent } from './pages-components/Reports/Molecules/charts/map-chart/map-chart.component';
import { RoundChartComponent } from './pages-components/Reports/Molecules/charts/round-chart/round-chart.component';
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
import { ReportModalComponent } from './pages-components/Reports/Atoms/report-modal/report-modal.component';
import { ReportsButtonComponent } from './pages-components/Reports/Atoms/buttons/reports-button/reports-button.component';
import { ReportsSelectInput } from './pages-components/Reports/Atoms/inputs/reports-select-input/reports-select-input.component';
import { ReportsSearchInputComponent } from './pages-components/Reports/Atoms/inputs/reports-search-input/reports-search-input.component';
import { ReportsInfoButtonComponent } from './pages-components/Reports/Atoms/buttons/reports-info-button/reports-info-button.component';
import { ReportsPrimaryButtonComponent } from './pages-components/Reports/Atoms/buttons/reports-primary-button/reports-primary-button.component';
import { ReportsSecondaryButtonComponent } from './pages-components/Reports/Atoms/buttons/reports-secondary-button/reports-secondary-button.component';
import { ReportsSelectInputSearchComponent } from './pages-components/Reports/Atoms/inputs/reports-select-input-search/reports-select-input-search.component';
import { ReportsLightButtonComponent } from './pages-components/Reports/Atoms/buttons/reports-light-button/reports-light-button.component';
import { ReportsIconLinkComponent } from './pages-components/Reports/Atoms/links/reports-icon-links/reports-icon-link.component';
import { ReportsTextLinkComponent } from './pages-components/Reports/Atoms/links/reports-text-link/reports-text-link.component';
import { ReportsDateMenuComponent } from './pages-components/Reports/Molecules/menu/reports-date-menu/reports-date-menu.component';
import { ReportsMenuComponent } from './pages-components/Reports/Molecules/menu/reports-menu/reports-menu.component';
import { ReportsSelectWithInitialValueComponent } from './pages-components/Reports/Atoms/inputs/reports-select-with-initial-value/reports-select-with-initial-value.component';
import { ReportsMobileMenuComponent } from './pages-components/Reports/Molecules/menu/reports-mobile-menu/reports-mobile-menu.component';
import { ReportStatusComponent } from './pages-components/Reports/Atoms/report-status/report-status.component';
import { ReportsCheckboxInput } from './pages-components/Reports/Atoms/inputs/reports-checkbox-input/reports-checkbox-input.component';
import { ReportTableComponent } from './pages-components/Reports/Molecules/report-table/report-table.component';
import { TeamsMutablePrimaryButtonComponent } from './pages-components/Teams/Atoms/buttons/teams-mutable-primary-button/teams-mutable-primary-button.component';
import { TeamsMutableGradientIconButtonComponent } from './pages-components/Teams/Atoms/buttons/teams-mutable-gradient-icon-button/teams-mutable-gradient-icon-button.component';
import { TeamsMutableDangerButtonComponent } from './pages-components/Teams/Atoms/buttons/teams-mutable-danger-button/teams-mutable-danger-button.component';
import { TeamsSimpleButtonComponent } from './pages-components/Teams/Atoms/buttons/teams-simple-button/teams-simple-button.component';
import { TeamsSecondaryButtonComponent } from './pages-components/Teams/Atoms/buttons/teams-secondary-button/teams-secondary-button.component'
import { TeamsCheckboxMutableGradientComponent } from './pages-components/Teams/Atoms/inputs/teams-checkbox-mutable-gradient/teams-checkbox-mutable-gradient.component';
import { TeamsSearchInputComponent } from './pages-components/Teams/Atoms/inputs/teams-search-input/teams-search-input.component';
import { TeamsSelectInput } from './pages-components/Teams/Atoms/inputs/teams-select-input/teams-select-input.component';
import { TeamsTipsComponent } from './pages-components/Teams/Atoms/teams-tips/teams-tips.component';
import { TeamsCardComponent } from './pages-components/Teams/Molecules/teams-card/teams-card.component';
import { TeamsCardsListComponent } from './pages-components/Teams/Organisms/teams-cards-list/teams-cards-list.component';
import { TeamsModalComponent } from './pages-components/Teams/Atoms/modals/teams-modal/teams-modal.component';
import { TeamsInputComponent } from './pages-components/Teams/Atoms/inputs/teams-input/teams-input.component';
import { RequestPrimaryButtonComponent } from './pages-components/Data_Request_Form/Atoms/buttons/request-primary-button/request-primary-button.component';
import { RequestSecondaryButtonComponent } from './pages-components/Data_Request_Form/Atoms/buttons/request-secondary-button/request-secondary-button.component';
import { RequestTextInputComponent } from './pages-components/Data_Request_Form/Atoms/inputs/request-text-input/request-text-input.component';
import { RequestSelectInputComponent } from './pages-components/Data_Request_Form/Atoms/inputs/request-select-input/request-select-input.component';
import { RequestInputBlockComponent } from './pages-components/Data_Request_Form/Molecules/request-input-block/request-input-block.component';
import { RequestTextAreaComponent } from './pages-components/Data_Request_Form/Atoms/inputs/request-text-area/request-text-area.component';
import { RequestFormComponent } from './pages-components/Data_Request_Form/Organisms/request-form/request-form.component';
import { SimplePolicyGeneratorButtonComponent } from './pages-components/Policies_Customize/Atoms/buttons/simple-policy-generator-button/simple-policy-generator-button.component';
import { PlanBuilderRangeComponent } from './pages-components/Plan_Builder/Atoms/plan-builder-range/plan-builder-range.component';
import { PlanBuilderCheckboxComponent } from './pages-components/Plan_Builder/Atoms/plan-builder-checkbox/plan-builder-checkbox.component';
import { PlanBuilderTogglerComponent } from './pages-components/Plan_Builder/Atoms/plan-builder-toggler/plan-builder-toggler.component';
import { PlanBuilderCardComponent } from './pages-components/Plan_Builder/Molecules/plan-builder-card/plan-builder-card.component';
import { PlanBuilderPlanComponent } from './pages-components/Plan_Builder/Molecules/plan-builder-plan/plan-builder-plan.component';
import { PlanBuilderPrimaryButtonComponent } from './pages-components/Plan_Builder/Atoms/plan-builder-primary-button/plan-builder-primary-button.component';
import { PlanBuilderSecondaryButtonComponent } from './pages-components/Plan_Builder/Atoms/plan-builder-secondary-button/plan-builder-secondary-button.component';
import { PlanBuilderContactUsComponent } from './pages-components/Plan_Builder/Molecules/plan-builder-contact-us/plan-builder-contact-us.component';
import { PlanBuilderDomainsSelectComponent } from './pages-components/Plan_Builder/Molecules/plan-builder-domains-select/plan-builder-domains-select.component';
import { PlanBuilderCardsListComponent } from './pages-components/Plan_Builder/Organisms/plan-builder-cards-list/plan-builder-cards-list.component';
import { BillingPrimaryButtonComponent } from './pages-components/Billing_Preferences/Atoms/buttons/billing-primary-button/billing-primary-button.component';
import { BillingPrimaryAsymmetricalButtonComponent } from './pages-components/Billing_Preferences/Atoms/buttons/billing-primary-asymmetrical-button/billing-primary-asymmetrical-button.component';
import { BillingSecondaryButtonComponent } from './pages-components/Billing_Preferences/Atoms/buttons/billing-secondary-button/billing-secondary-button.component';
import { BillingDangerButtonComponent } from './pages-components/Billing_Preferences/Atoms/buttons/billing-danger-button/billing-danger-button.component';
import { BillingInputComponent } from './pages-components/Billing_Preferences/Atoms/inputs/billing-input/billing-input.component';
import { BillingSelectComponent } from './pages-components/Billing_Preferences/Atoms/inputs/billing-select/billing-select.component';
import { BillingPaymentComponent } from './pages-components/Billing_Preferences/Molecules/billing-payment/billing-payment.component';
import { BillingPaymentTableComponent } from './pages-components/Billing_Preferences/Atoms/tables/billing-payment-table/billing-payment-table.component';
import { BillingTitleComponent } from './pages-components/Billing_Preferences/Atoms/billing-title/billing-title.component';
import { BillingCardComponent } from './pages-components/Billing_Preferences/Atoms/billing-card/billing-card.component';
import { BillingWarningComponent } from './pages-components/Billing_Preferences/Molecules/billing-warning/billing-warning.component';
import { BillingPlanComponent } from './pages-components/Billing_Preferences/Molecules/billing-plan/billing-plan.component';
import { BillingModalComponent } from './pages-components/Billing_Preferences/Atoms/billing-modal/billing-modal.component';
import { BillingInvoicesComponent } from './pages-components/Billing_Preferences/Molecules/billing-invoices/billing-invoices.component';
import { CookieTitleComponent } from './pages-components/Cookie_Banner/Atoms/cookie-title/cookie-title.component';
import { CookieLayoutCardComponent } from './pages-components/Cookie_Banner/Atoms/cookie-layout-card/cookie-layout-card.component';
import { CookieDesignCardComponent } from './pages-components/Cookie_Banner/Atoms/cookie-design-card/cookie-design-card.component';
import { CookieSelectInputComponent } from './pages-components/Cookie_Banner/Atoms/cookie-select-input/cookie-select-input.component';
import { CookieColorPickerComponent } from './pages-components/Cookie_Banner/Atoms/cookie-color-picker/cookie-color-picker.component';
import { CookieReloadButtonComponent } from './pages-components/Cookie_Banner/Atoms/buttons/cookie-reload-button/cookie-reload-button.component';
import { CookieUploadComponent } from './pages-components/Cookie_Banner/Atoms/cookie-upload/cookie-upload.component';
import { CookieDesignCardRowComponent } from './pages-components/Cookie_Banner/Molecules/rows/cookie-design-card-row/cookie-design-card-row.component';
import { CookieLayoutCardRowComponent } from './pages-components/Cookie_Banner/Molecules/rows/cookie-layout-card-row/cookie-layout-card-row.component';
import { CookiePrimaryButtonComponent } from './pages-components/Cookie_Banner/Atoms/buttons/cookie-primary-button/cookie-primary-button.component';
import { CookieSecondaryButtonComponent } from './pages-components/Cookie_Banner/Atoms/buttons/cookie-secondary-button/cookie-secondary-button.component';
import { CookieEditorComponent } from './pages-components/Cookie_Banner/Molecules/cookie-editor/cookie-editor.component';

PlotlyModule.plotlyjs = PlotlyJS;

@NgModule({
  entryComponents: [
    PoliciesDynamicTextComponent,
    PoliciesDynamicListComponent,
    PoliciesDynamicTableComponent
 ],
  providers: [AddService],
  declarations: [
    TeamsModalComponent,
    TeamsInputComponent,
    TeamsCardComponent,
    TeamsSearchInputComponent,
    TeamsCheckboxMutableGradientComponent,
    TeamsSimpleButtonComponent,
    TeamsMutableDangerButtonComponent,
    TeamsMutableGradientIconButtonComponent,
    TeamsMutablePrimaryButtonComponent,
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
    CardReportsComponent,
    SecondaryBorderButtonComponent,
    SelectedItemComponent,
    CardReportStatusComponent,
    SimpleCounterComponent,
    CheckboxCircleInputComponent,
    CheckboxInputDarkComponent,
    SimpleTextareaComponent,
    LightAssimetricButtonComponent,
    StatusStepsDynamicComponent,
    StatusBarComponent,
    DomainsApproveModalComponent,
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
    DomainsSearchInputComponent,
    ReportModalComponent,
    ReportsButtonComponent,
    ReportsSelectInput,
    ReportsSearchInputComponent,
    ReportsSecondaryButtonComponent,
    ReportsPrimaryButtonComponent,
    ReportsInfoButtonComponent,
    ReportsSelectWithInitialValueComponent,
    ReportsSelectInputSearchComponent,
    ReportsLightButtonComponent,
    ReportsIconLinkComponent,
    ReportsTextLinkComponent,
    ReportsDateMenuComponent,
    ReportsMenuComponent,
    ReportsMobileMenuComponent,
    ReportStatusComponent,
    ReportsCheckboxInput,
    ReportTableComponent,
    TeamsSecondaryButtonComponent,
    TeamsTipsComponent,
    TeamsSelectInput,
    TeamsCardsListComponent,
    RequestPrimaryButtonComponent,
    RequestSecondaryButtonComponent,
    RequestTextInputComponent,
    RequestSelectInputComponent,
    RequestInputBlockComponent,
    RequestTextAreaComponent,
    RequestFormComponent,
    SimplePolicyGeneratorButtonComponent,
    PlanBuilderRangeComponent,
    PlanBuilderCheckboxComponent,
    PlanBuilderTogglerComponent,
    PlanBuilderCardComponent,
    PlanBuilderPlanComponent,
    PlanBuilderPrimaryButtonComponent,
    PlanBuilderSecondaryButtonComponent,
    PlanBuilderContactUsComponent,
    PlanBuilderDomainsSelectComponent,
    PlanBuilderCardsListComponent,
    BillingPrimaryButtonComponent,
    BillingPrimaryAsymmetricalButtonComponent,
    BillingSecondaryButtonComponent,
    BillingDangerButtonComponent,
    BillingInputComponent,
    BillingSelectComponent,
    BillingPaymentComponent,
    BillingPaymentTableComponent,
    BillingTitleComponent,
    BillingCardComponent,
    BillingWarningComponent,
    BillingPlanComponent,
    BillingModalComponent,
    BillingInvoicesComponent,
    CookieTitleComponent,
    CookieLayoutCardComponent,
    CookieDesignCardComponent,
    CookieSelectInputComponent,
    CookieColorPickerComponent,
    CookieReloadButtonComponent,
    CookieUploadComponent,
    CookieDesignCardRowComponent,
    CookieLayoutCardRowComponent,
    CookiePrimaryButtonComponent,
    CookieSecondaryButtonComponent,
    CookieEditorComponent,
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
    AngularEditorModule, 
    FormsModule, 
    ReactiveFormsModule
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }

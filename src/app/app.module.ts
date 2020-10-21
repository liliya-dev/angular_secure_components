import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
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
import { navLinkComponent } from './atoms/navLink/navLink.component';
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
import { SelectInputComponent } from './molecules/select-input/select-input.component';
import { NgSelectModule } from '@ng-select/ng-select';


@NgModule({
  declarations: [
    AppComponent,
    IconContainerComponent,
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
    SelectInputComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

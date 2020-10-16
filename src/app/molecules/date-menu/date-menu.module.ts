import { NgModule } from '@angular/core';
import { IconContainerComponent } from '../../atoms/iconContainer/iconContainer.component';
import { DateMenuComponent } from './date-menu.component';

@NgModule({
  declarations: [
    DateMenuComponent,

  ],
  imports: [
    IconContainerComponent
  ],
  providers: [],
  bootstrap: []
})
export class DateMenuModule { }
import { NgModule } from '@angular/core';
import { DateMenuComponent } from './date-menu.component';
import { IconContainerModule } from '../../atoms/iconContainer/iconContainer.module';

@NgModule({
  declarations: [
    DateMenuComponent
  ],
  imports: [
    IconContainerModule
  ],
  exports: [
  ]
})
export class DateMenuModule { }
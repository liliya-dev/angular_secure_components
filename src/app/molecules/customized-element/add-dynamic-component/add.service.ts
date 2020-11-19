import { Injectable } from '@angular/core';
import { DynamicTableComponent } from '../../../atoms/tables/dynamic-table/dynamic-table.component';
import { DynamicListComponent } from '../../../atoms/tables/dynamic-list/dynamic-list.component';
import { DynamicTextComponent } from '../../../atoms/text/dynamic-text/dynamic-text.component';
import { AddItem } from './add-item';

@Injectable()
export class AddService {
  getAds(type: string, data?: any) {
    if(type === 'table' && data) {
      return (
        new AddItem(DynamicTableComponent, data)
      ) 
    } else if (type ==='list' && data) {
       return new AddItem(DynamicListComponent, data)
    } else if (type === 'text' && data) {
      console.log(45, data)
      return new AddItem(DynamicTextComponent, data)
    }
  }
}
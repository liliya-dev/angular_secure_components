import { Injectable } from '@angular/core';
import { DynamicTableComponent } from '../../../atoms/tables/dynamic-table/dynamic-table.component';
import { DynamicListComponent } from '../../../atoms/tables/dynamic-list/dynamic-list.component';
import { DynamicTextComponent } from '../../../atoms/text/dynamic-text/dynamic-text.component';
import { AddItem } from './add-item';

@Injectable()
export class AddService {
  getAds(type: string, data?: any, func?) {
    if (type === 'table' && data) {
      return new AddItem(DynamicTableComponent, data, func)
    } 
    else if (type ==='list' && data) {
       return new AddItem(DynamicListComponent, data,func)
    } else if (type === 'text' && data) {
      return new AddItem(DynamicTextComponent, data, func)
    }
  }
}
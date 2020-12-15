import { Injectable } from '@angular/core';
import { PoliciesDynamicListComponent } from '../../../Atoms/dynamic-list/dynamic-list.component';
import { PoliciesDynamicTextComponent } from '../../../Atoms/dynamic-text/dynamic-text.component';
import { PoliciesDynamicTableComponent } from '../../../Atoms/dynamic-table/dynamic-table.component';
import { AddItem } from './add-item';

@Injectable()
export class AddService {
  getAds(type: string, data?: any) {
    if (type === 'table' && data) {
      return new AddItem(PoliciesDynamicTableComponent, data)
    } else if (type ==='list' && data) {
       return new AddItem(PoliciesDynamicListComponent, data)
    } else if (type === 'text' && data) {
      return new AddItem(PoliciesDynamicTextComponent, data)
    }
  }
}
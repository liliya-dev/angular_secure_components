import { Component, ViewChild, OnChanges, ElementRef, KeyValueDiffer, DoCheck, EventEmitter, Output } from '@angular/core';
import { title } from 'process';

@Component({
  selector: 'app-dynamic-list',
  templateUrl: './dynamic-list.component.html',
  styleUrls: ['./dynamic-list.component.scss'],
  
})

export class DynamicListComponent {
  titles = ['Type text here'];
  listTitle = 'Put your title';

  handlePressKey = (event, i) => {
    if (event.keyCode === 13) {
      const newTitlesList = [...this.titles];
      newTitlesList.splice(i + 1, 0, 'Type text here');
      this.titles = [...newTitlesList];
      setTimeout(() => {
        const inputs = document.querySelectorAll('.app-dynamic-list__input');
        (inputs[i + 1]as HTMLElement).focus();
      }, 100)
    }
  }

  indexTracker(index: number, value: any) {
    return index;
  }
}

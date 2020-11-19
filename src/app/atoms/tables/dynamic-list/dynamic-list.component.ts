import { Component, ViewChild, OnChanges, ElementRef, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dynamic-list',
  templateUrl: './dynamic-list.component.html',
  styleUrls: ['./dynamic-list.component.scss'],
})

export class DynamicListComponent implements OnInit, OnChanges {
  @Input() data: any;
  titles: string[];
  listTitle: string;

  @ViewChild('dynamicList') dynamicList: ElementRef; 

  handlePressKey = (event, i) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      this.titles.splice(i + 1, 0, 'Type text here');
      setTimeout(() => {
        const inputs = this.dynamicList.nativeElement.querySelectorAll('.app-dynamic-list__input');
        (inputs[i + 1]as HTMLElement).focus();
      }, 100)
    }
  }

  indexTracker(index: number, value: any) {
    return index;
  }

  setData = () => {
    this.listTitle = this.data.listTitle || 'Put title';
    this.titles = this.data.titles || ['Text'];
  }

  ngOnChanges() {
    this.setData();
  }

  ngOnInit() {
    this.setData();
  }
}

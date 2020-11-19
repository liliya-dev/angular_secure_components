import { Component, HostListener, ElementRef, ViewChild, OnChanges } from '@angular/core';

@Component({
  selector: 'app-dynamic-table',
  templateUrl: './dynamic-table.component.html',
  styleUrls: ['./dynamic-table.component.scss']
})
export class DynamicTableComponent implements OnChanges {
  heads = ['text 1'];
  data: any =  [ 
    { 'text 1' : '1.1. Text' }
  ]
  rows = 1;
  columns = 1;
  mainColumn = this.heads[0];
  isMobile: boolean;
  activeColumn = '';

  showNext(direction: string) {
    const headsListWithoutMain = this.heads.filter(head => head !== this.mainColumn);
    const currentIndex = headsListWithoutMain.findIndex(head => head === this.activeColumn);
    let nextIndex;
    
    if (direction =='forward') {
      nextIndex = (currentIndex + 1 > headsListWithoutMain.length - 1) ? 0 : currentIndex + 1; 
    } else if (direction =='back') {
      nextIndex = (currentIndex - 1 < 0) ? headsListWithoutMain.length - 1 : currentIndex - 1; 
    }
    this.activeColumn = headsListWithoutMain[nextIndex];
  }

  addRow = () => {
    this.rows = this.rows + 1;
    let newDataItem = {};
    const newRow = this.heads.forEach((head, i) => {
      newDataItem[head]=`${this.rows}.${i + 1}. Text`
    });
    this.data = [...this.data, newDataItem];
  }

  addColumn = () => {
    this.columns = this.columns + 1;
    this.heads = [...this.heads, `Text ${this.columns}`];
    this.data.forEach((item, i )=> {
      item[`Text ${this.columns}`] = `${i + 1}.${this.columns}. Text`;
    })
    this.activeColumn = this.heads[1];
    const width = document.querySelector('.app-dynamic-table').clientWidth;
    this.isMobile = (width / this.columns) < 200;
  }

  editHead = (event, headTitle) => {
    const index = this.heads.findIndex(head => head === headTitle);
    if (index === 0) {
      this.mainColumn = event.target.value;
    }
    const value = event.target.value;
    if (event.target.value.length) {
      this.heads[index] = value;
      this.data.forEach(item => {
        item[`${value}`] = item[headTitle];
        delete item[headTitle];
      })
    } else {
      this.heads[index] = headTitle;
    }
  }

  editCeil = (event, index, head) => {
    if (event.target.value.length) {
      this.data[index][head] = event.target.value;
    }
  }


  @ViewChild('table') table: ElementRef;
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    console.log('resize')
    const width = this.table.nativeElement.clientWidth;
    this.isMobile = (width / this.columns) < 200;
    console.log(this.isMobile)
  }

  ngOnChanges() {
    const width = document.querySelector('.app-dynamic-table').clientWidth;
    this.isMobile = (width / this.columns) < 200;
  }
}


// need to add some verification on empty strings and number of columns
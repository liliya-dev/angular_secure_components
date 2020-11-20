import { Component, HostListener, ElementRef, ViewChild, OnChanges, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dynamic-table',
  templateUrl: './dynamic-table.component.html',
  styleUrls: ['./dynamic-table.component.scss']
})
export class DynamicTableComponent implements OnChanges, OnInit {
  @Input() data: any;
  @Output() handler: EventEmitter<any> = new EventEmitter()

  heads: string[];
  tableData: any[];
  isMobile: boolean;
  mainColumn: string;
  editSectionElement;
  isActive: boolean;

  rows = 1;
  columns = 1;
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
    this.tableData = [...this.tableData, newDataItem];
  }

  addColumn = () => {
    console.log(765432)
    this.handler.emit(this.heads)
    this.columns = this.columns + 1;
    this.heads = [...this.heads, `Text ${this.columns}`];
    this.tableData.forEach((item, i )=> {
      item[`Text ${this.columns}`] = `${i + 1}.${this.columns}. Text`;
    })
    this.activeColumn = this.heads[1];
    const width = document.querySelector('.app-dynamic-table').clientWidth;
    this.isMobile = (width / this.columns) < 200;
  }

  editHead = (event, headTitle) => {
    const index = this.heads.findIndex(head => head === headTitle);
    const activeIndex = this.heads.findIndex(head => head === this.activeColumn);
    const value = event.target.value;
    if (index === activeIndex) {
      this.activeColumn = value;
    }
    if (index === 0) {
      this.mainColumn = value;
    }
    if (event.target.value.length) {
      this.heads[index] = value;
      this.tableData.forEach(item => {
        item[`${value}`] = item[headTitle];
        delete item[headTitle];
      })
    } else {
      this.heads[index] = headTitle;
    }
  }

  editCeil = (event, index, head) => {
    if (event.target.value.length) {
      this.tableData[index][head] = event.target.value;
    }
  }

  setIsActive() {
    this.isActive = true;
  }

  @ViewChild('table') table: ElementRef;
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    const width = this.table.nativeElement.clientWidth;
    this.isMobile = (width / this.columns) < 200;
  }

  @HostListener('document:click', ['$event'])
  onClick(event: Event) {
    if (!this.table.nativeElement.contains(event.target) && this.isActive) {
      this.handler.emit(
        {
          sectionId: this.data.sectionId,
          elementId: this.data.sectionElementId,
          heads: this.heads,
          tableData: this.tableData,
          type: 'table'
        }
      )
      this.isActive = false;
    }
  }

  setData = () => {
    this.heads = this.data.tableData.heads || ['text 1'];
    this.mainColumn = this.heads[0];
    this.tableData = this.data.tableData.tableData || [{ 'text 1' : '1.1. Text' }];
    this.rows = this.tableData.length;
    this.columns = Object.keys(this.tableData[0]).length;
  }

  ngOnChanges() {
    const width = document.querySelector('.app-dynamic-table').clientWidth;
    this.isMobile = (width / this.columns) < 200;
    this.setData();
  }

  ngOnInit() {
    this.setData();
  }
}
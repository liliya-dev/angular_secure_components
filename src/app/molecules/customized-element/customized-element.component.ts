import { Component, EventEmitter, Input, ViewEncapsulation, OnInit, OnChanges, Output } from '@angular/core';
import { AddItem } from './add-dynamic-component/add-item';
import { AddService } from './add-dynamic-component/add.service';

const standartListData =  {
  listTitle: 'Put list title',
  titles: ['Type text here']
}

const standartTableData = {
  heads: ['text 1'],
  tableData: [{ 'text 1' : '1.1. Text', }]
}

const standartTextData = { title: 'Your new paragraph' }

@Component({
  selector: 'app-customized-element',
  templateUrl: './customized-element.component.html',
  styleUrls: ['./customized-element.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class CustomizedElementComponent implements OnInit, OnChanges {
  @Input() initialState: any[];
  @Input() sectionId: number;
  @Output() setHoverElement?: EventEmitter<any> = new EventEmitter();
  @Output() setNoHoverElement?: EventEmitter<any> = new EventEmitter();
  @Output() editSection?: EventEmitter<any> = new EventEmitter();
  
    componentsList: AddItem[] = [];
    isVisibleButtonsBlock = false;
    activeBlockNumber = -1;
  constructor(private addService: AddService) {
    
  }

  setIsVisibleButtonsBlock = (value: boolean) => {
    this.isVisibleButtonsBlock = value;
  }

  editSectionElement(props) {
    console.log(this.componentsList, 987, props)
  }

  setActiveBlockNumber = (index: number) => {
    this.activeBlockNumber = index;
    if (index !== -1) {
      this.setHoverElement.emit();
    } else {
      this.setNoHoverElement.emit();
    }
  }

  callEditSection () {
    // this.editSection.emit({
    //   sectionId: this.sectionId,
    //   componentsList: this.componentsList,
    // })
  }

  addTable(index: number) {
    const newAdItem = this.addService.getAds('table', {
      tableData: standartTableData,
      sectionId: this.sectionId,
      sectionElementId: index + 1
    }, this.editSectionElement);
    this.componentsList.splice(index + 1, 0, newAdItem);
    console.log(this.componentsList)
  }

  addList(index: number) {
    const newAdItem = this.addService.getAds('list', standartListData, this.editSectionElement);
    this.componentsList.splice(index + 1, 0, newAdItem);
    this.callEditSection();
  }

  addText(index: number) {
    const newAdItem = this.addService.getAds('text', standartTextData, this.editSectionElement);
    this.componentsList.splice(index + 1, 0, newAdItem);
    this.callEditSection();
  }

  deleteComponent(index: number) {
    this.componentsList.splice(index, 1);
    this.callEditSection();
  }

  ngOnInit(): void {
    const initialComponentsList = this.initialState.map(component => this.addService.getAds(component.type, component.dataFromParent), this.editSectionElement);
    this.componentsList = [...initialComponentsList];
  }

  ngOnChanges(): void {
    const initialComponentsList = this.initialState.map(component => this.addService.getAds(component.type, component.dataFromParent), this.editSectionElement);
    this.componentsList = [...initialComponentsList];
  }
}
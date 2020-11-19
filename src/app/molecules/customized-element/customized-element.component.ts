import { Component, Input, ViewEncapsulation, OnInit, OnChanges } from '@angular/core';
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

  componentsList: AddItem[] = [];
  isVisibleButtonsBlock = false;
  activeBlockNumber = -1;
  constructor(private addService: AddService) {}

  setIsVisibleButtonsBlock = (value: boolean) => {
    this.isVisibleButtonsBlock = value;
  }

  setActiveBlockNumber = (index: number) => {
    this.activeBlockNumber = index;
  }

  addTable(index: number){
    const newAdItem = this.addService.getAds('table', standartTableData);
    this.componentsList.splice(index + 1, 0, newAdItem)
  }

  addList(index: number) {
    const newAdItem = this.addService.getAds('list', standartListData);
    this.componentsList.splice(index + 1, 0, newAdItem)
  }

  addText(index: number) {
    const newAdItem = this.addService.getAds('text', standartTextData);
    this.componentsList.splice(index + 1, 0, newAdItem)
  }

  deleteComponent(index: number) {
    this.componentsList.splice(index, 1);
  }

  ngOnInit(): void {
    const initialComponentsList = this.initialState.map(component => this.addService.getAds(component.type, component.dataFromParent));
    this.componentsList = [...initialComponentsList];
  }

  ngOnChanges(): void {
    const initialComponentsList = this.initialState.map(component => this.addService.getAds(component.type, component.dataFromParent));
    this.componentsList = [...initialComponentsList];
  }
}
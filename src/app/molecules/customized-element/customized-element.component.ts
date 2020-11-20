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
    if (props.sectionId === this.sectionId) {
      if (props.type === 'table') {
        const newAdItem = this.addService.getAds('table', {
          
          heads: props.heads,
          tableData: props.tableData,
        
          sectionId: this.sectionId,
          sectionElementId: props.elementId
        });
        this.componentsList[props.elementId] = newAdItem;
      } else if (props.type === 'list') {
        const newAdItem = this.addService.getAds('list', {
          listTitle: props.listTitle,
          titles: props.titles,
          sectionId: this.sectionId,
          sectionElementId: props.elementId
        });
        this.componentsList[props.elementId] = newAdItem;
      } else if (props.type === 'text') {
        const newAdItem = this.addService.getAds('text', {
          title: props.title,
          sectionId: this.sectionId,
          sectionElementId: props.elementId
        });
        this.componentsList[props.elementId] = newAdItem;
      }
    }
    console.log(props, 7765783)
    // here need to passs new section to parent component
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
    });
    this.componentsList.splice(index + 1, 0, newAdItem);
  }

  addList(index: number) {
    const newAdItem = this.addService.getAds('list', 
    { ...standartListData,
      sectionId: this.sectionId,
      sectionElementId: index + 1
    });
    this.componentsList.splice(index + 1, 0, newAdItem);
    this.callEditSection();
  }

  addText(index: number) {
    const newAdItem = this.addService.getAds('text', 
    { ...standartTextData,
      sectionId: this.sectionId,
      sectionElementId: index + 1
    });
    this.componentsList.splice(index + 1, 0, newAdItem);
    this.callEditSection();
  }

  deleteComponent(index: number) {
    this.componentsList.splice(index, 1);
    this.callEditSection();
  }

  ngOnInit(): void {
    const initialComponentsList = this.initialState.map(
      (component, index) => {
        return this.addService.getAds(component.type, 
          {...component.dataFromParent, 
            sectionId: component.sectionId,
            sectionElementId: index
          })
      });
    this.componentsList = [...initialComponentsList];
  }

  ngOnChanges(): void {
    const initialComponentsList = this.initialState.map(
      (component, index) => {
        return this.addService.getAds(component.type, 
          {...component.dataFromParent, 
            sectionId: component.sectionId,
            sectionElementId: index
          })
      });
    this.componentsList = [...initialComponentsList];
  }
}
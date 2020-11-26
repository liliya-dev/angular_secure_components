import { Component, EventEmitter, Input, ViewEncapsulation, OnInit, OnChanges, Output } from '@angular/core';
import { AddItem } from './add-dynamic-component/add-item';
import { AddService } from './add-dynamic-component/add.service';

const standartListData =  {
  listTitle: 'Put list title',
  titles: ['Type text here']
}

const standartTableData = {
  heads: ['text 1'],
  tableData: [{ 'text 1' : '1.1. Text', }, { 'text 1' : '1.1. Text', }]
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
  @Output() addComponentToSection?: EventEmitter<any> = new EventEmitter();

  componentsList: AddItem[] = [];
  isVisibleButtonsBlock = false;
  activeBlockNumber = -1;

  constructor(private addService: AddService) {}

  setIsVisibleButtonsBlock = (value: boolean) => {
    this.isVisibleButtonsBlock = value;
  }

  editSectionElement(props) {
    if (props.sectionId === this.sectionId) {
      let newAdItem;
      if (props.type === 'table') {
        newAdItem = this.addService.getAds('table', {
          heads: props.heads,
          tableData: props.tableData,
          sectionId: this.sectionId,
          sectionElementId: props.elementId
        });
        this.callEditSection(props.elementId, { heads: props.heads, tableData: props.tableData }) 
      } else if (props.type === 'list') {
        newAdItem = this.addService.getAds('list', {
          listTitle: props.listTitle,
          titles: props.titles,
          sectionId: this.sectionId,
          sectionElementId: props.elementId
        });
        this.callEditSection(props.elementId, { listTitle: props.listTitle, titles: props.titles }) 
      } else if (props.type === 'text') {
        newAdItem = this.addService.getAds('text', {
          title: props.title,
          sectionId: this.sectionId,
          sectionElementId: props.elementId
        });
        this.callEditSection(props.elementId, { title: props.title }) 
      }
      this.componentsList[props.elementId] = newAdItem;
    }
  }

  setActiveBlockNumber = (index: number) => {
    this.activeBlockNumber = index;
    if (index !== -1) {
      this.setHoverElement.emit();
    } else {
      this.setNoHoverElement.emit();
    }
  }

  /// if you want to pass props to sections List
  callAddComponentToSection(index, type) {
    this.addComponentToSection.emit({
      sectionId: this.sectionId,
      index,
      type,
    })
  }

  /// if you want to pass props to sections List
  callEditSection (elementId, data) {
    this.editSection.emit({
      sectionId: this.sectionId,
      sectionElementId: elementId,
      data
    })
  }

  addTable(index: number) {
    const newAdItem = this.addService.getAds('table', 
    {
      heads: ['text 1'],
      tableData: [{ 'text 1' : '1.1. Text', }, { 'text 1' : '1.1. Text', }],
      sectionId: this.sectionId,
      sectionElementId: index + 1
    });
    this.componentsList.splice(index + 1, 0, newAdItem);
    this.callAddComponentToSection(index, 'table')
  }

  addList(index: number) {
    const newAdItem = this.addService.getAds('list', 
    { 
      listTitle: 'Put list title',
      titles: ['Type text here'],
      sectionId: this.sectionId,
      sectionElementId: index + 1
    });
    this.componentsList.splice(index + 1, 0, newAdItem);
    this.callAddComponentToSection(index, 'list')
  }

  addText(index: number) {
    const newAdItem = this.addService.getAds('text', 
    { ...standartTextData,
      sectionId: this.sectionId,
      sectionElementId: index + 1
    });
    this.componentsList.splice(index + 1, 0, newAdItem);
    this.callAddComponentToSection(index, 'text')
  }

  deleteComponent(index: number) {
    this.componentsList.splice(index, 1);
  }
  
  setInitialStateOfComponent() {
    const initialComponentsList = this.initialState.map(
      (component, index) => {
        return this.addService.getAds(component.type, 
          {...component.dataFromParent, 
            sectionId: this.sectionId,
            sectionElementId: index
          })
      });
    this.componentsList = [...initialComponentsList];
  }

  ngOnInit(): void {
    this.setInitialStateOfComponent();
  }

  indexTracker(index, id) {
    return id;
  }

  ngOnChanges(): void {
    this.setInitialStateOfComponent();
  }
}
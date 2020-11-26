import { Component, EventEmitter, Input, ViewEncapsulation, OnInit, OnChanges, Output } from '@angular/core';
import { AddItem } from './add-dynamic-component/add-item';
import { AddService } from './add-dynamic-component/add.service';
import { getInitialDataByType, getEditedDataByType } from './helpers';

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
      const editedData = getEditedDataByType(props.type, props)
      const newAdItem = this.addService.getAds(props.type, {
        ...editedData,
        sectionId: this.sectionId,
        sectionElementId: props.elementId
      });
      this.callEditSection(props.elementId, { ...editedData }) 
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

  addItem(index: number, type: string) {
    let initialData = {...getInitialDataByType(type)};
    const newAdItem = this.addService.getAds(type, 
    {
      ...initialData,
      sectionId: this.sectionId,
      sectionElementId: index + 1
    });
    this.componentsList.splice(index + 1, 0, newAdItem);
    this.callAddComponentToSection(index, type)
  }

  deleteComponent(index: number) {
    this.componentsList.splice(index, 1);
  }
  
  setInitialStateOfComponent() {
    const initialComponentsList = this.initialState.map(
      (component, index) => {
        return this.addService.getAds(component.type, 
          {
            ...component.dataFromParent, 
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
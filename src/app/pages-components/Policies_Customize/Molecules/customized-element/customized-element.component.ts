import { 
  Component, EventEmitter, Input, OnInit, OnChanges, 
  Output, ElementRef, ViewChild, HostListener, AfterViewInit 
} from '@angular/core';
import { AddItem } from './add-dynamic-component/add-item';
import { AddService } from './add-dynamic-component/add.service';
import { getInitialDataByType, getEditedDataByType } from './helpers';

@Component({
  selector: 'app-customized-element',
  templateUrl: './customized-element.component.html',
  styleUrls: ['./customized-element.component.scss'],
})

export class PoliciesCustomizedElementComponent implements OnInit, OnChanges, AfterViewInit {
  @Input() initialState: any[];
  @Input() sectionId: number;
  @Output() setHoverElement?: EventEmitter<any> = new EventEmitter();
  @Output() setNoHoverElement?: EventEmitter<any> = new EventEmitter();
  @Output() editSection?: EventEmitter<any> = new EventEmitter();
  @Output() addComponentToSection?: EventEmitter<any> = new EventEmitter();
  @Output() deleteComponentFromSection?: EventEmitter<any> = new EventEmitter();

  componentsList: AddItem[] = [];
  isVisibleButtonsBlock = false;
  activeBlockNumber = -1;
  isMobile: boolean;
  
  constructor(private addService: AddService) {}

  @ViewChild('customizedElement') customizedElement: ElementRef;
  
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.isMobile = this.customizedElement.nativeElement.clientWidth < 500;
  }

  /// adding buttons during hover
  setIsVisibleButtonsBlock = (value: boolean) => {
    this.isVisibleButtonsBlock = value;
  }

  setActiveBlockNumber = (index: number) => {
    this.activeBlockNumber = index;
    if (index !== -1) {
      this.setHoverElement.emit();
    } else {
      this.setNoHoverElement.emit();
    }
  }

  /// managing items(tables. lists, texts) from current component
  addItem(index: number, type: string) {
    let initialData = { ...getInitialDataByType(type) };
    const newAdItem = this.addService.getAds(type, {
      ...initialData,
      sectionId: this.sectionId,
      sectionElementId: index + 1
    });
    this.componentsList.splice(index + 1, 0, newAdItem);
    this.callAddComponentToSection(index, type)
  }

  deleteComponent(index: number) {
    this.componentsList.splice(index, 1);
    this.deleteComponentFromSection.emit({ index: index, sectionId: this.sectionId })
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

  /// if you want to pass props to sections List. managing items(tables. lists, texts) from parent component
  callAddComponentToSection(index, type) {
    this.addComponentToSection.emit({
      sectionId: this.sectionId,
      index,
      type,
    })
  }

  callEditSection (elementId, data) {
    this.editSection.emit({
      sectionId: this.sectionId,
      sectionElementId: elementId,
      data
    })
  }

  /// setting initial state of component
  setInitialStateOfComponent() {
    const initialComponentsList = this.initialState.map(
      (component, index) => {
        return this.addService.getAds(component.type, {
            ...component.dataFromParent, 
            sectionId: this.sectionId,
            sectionElementId: index
          })
      });
    this.componentsList = [...initialComponentsList];
  }


  ngAfterViewInit() {
    this.isMobile = this.customizedElement.nativeElement.clientWidth < 500;
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
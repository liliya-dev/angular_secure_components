import { Component, Input, OnChanges, OnInit, HostListener, ViewChild, ElementRef } from '@angular/core';
 
const MOBILE_VIEW = 725;

@Component({
  selector: 'app-dynamic-sections-list',
  templateUrl: './dynamic-sections-list.component.html',
  styleUrls: ['./dynamic-sections-list.component.scss']
})

export class PoliciesDynamicSectionsListComponent implements OnInit, OnChanges {
  @Input() initialSectionsList;
  sections = [];
  activeSection: number;
  isSectionActive: boolean = false;
  isElementActive: boolean = false;
  isMobile: boolean;
  isVisibleMobileMenu: boolean;

  @ViewChild('sectionsList') sectionsList: ElementRef;
  @ViewChild('mobileMenu') mobileMenu: ElementRef;
  @ViewChild('mobileButton') mobileButton: ElementRef;

  @HostListener('document:click', ['$event'])
	onClick(event: Event) {
    if (!this.mobileMenu.nativeElement.contains(event.target) && !this.mobileButton.nativeElement.contains(event.target)) {
      this.isVisibleMobileMenu = false;
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.isMobile = this.sectionsList.nativeElement.clientWidth < MOBILE_VIEW;
  }

  toggleSectionsMenu() {
    this.isVisibleMobileMenu = !this.isVisibleMobileMenu;
  }

  /// visual effects

  setHoverElement = () => {
    this.isElementActive = true;
    this.isSectionActive = false;
  }

  setNoHoverElement = () => {
    this.isElementActive = false;
    this.isSectionActive = true;
  }

  handleHover = (event: any, index: number) => {
    this.isSectionActive = index !== -1;
    this.activeSection = index;
  }

  scrollToActive(index) {
    const id = this.sections[index].sectionId;
    const element: HTMLElement = document.querySelector('#id'+id);
    element.scrollIntoView();
    if(this.isVisibleMobileMenu && this.isMobile) {
      this.isVisibleMobileMenu = false;
    }
  }

  /// managing section content

  editSection = (props) => {
    const indexOfSectionToEdit = this.sections.findIndex(section => section.sectionId === props.sectionId);
    this.sections[indexOfSectionToEdit].initialState[props.sectionElementId].dataFromParent = props.data;
  }

  addComponentToSection = ({ sectionId, index, type }) => {
    let initialData;
    switch(type) {
      case 'text': 
        initialData = { title: 'Your new paragraph' };
        break;
      case 'list': 
        initialData = { listTitle: 'Put list title', titles: ['Type text here'] };
        break;
      case 'table': 
        initialData = { heads: ['text 1'], tableData: [{ 'text 1' : '1.1. Text', }, { 'text 1' : '1.1. Text', }] };
        break;
    }
    const dataOfNewComponent = { type, dataFromParent: initialData };
    const indexOfSectionToEdit = this.sections.findIndex(section => section.sectionId === sectionId);
    const newState = [...this.sections[indexOfSectionToEdit].initialState];
    newState.splice(index + 1, 0, dataOfNewComponent);
    this.sections[indexOfSectionToEdit].initialState  = [...newState];
  }

  deleteComponentFromSection = ({ index, sectionId }) => {
    const indexOfSectionToEdit = this.sections.findIndex(section => section.sectionId === sectionId);
    const newState = [...this.sections[indexOfSectionToEdit].initialState];
    newState.splice(index, 1);
    this.sections[indexOfSectionToEdit].initialState  = [...newState];
  }

  addSection(index: number) {
    const initialSectionState =  [{
      type: 'text',
      dataFromParent: {
        title: `For the purpose of this Privacy Policy, we are a Data Controller of your personal information. Our legal basis for collecting and using your personal information, as described in this Privacy Policy, depends on the information we collect and the specific context in which we collect it. We may process your personal information because:`
      }
    },]
    this.sections.push(
      {
        initialState: [...initialSectionState],
        title: `New section ${index + 1}`,
        sectionId: Date.now(),
      }
    );
  }

  indexTracker(index: number, value: any) {
    return index;
  }

  setInitialState() {
    if (this.sections.length === 0 && !this.initialSectionsList) {
      this.addSection(0);
    }
    if (this.initialSectionsList) {
      this.sections = this.initialSectionsList
    }
  }

  ngAfterViewInit() {
    this.isMobile = this.sectionsList.nativeElement.clientWidth < MOBILE_VIEW;
  }

  ngOnChanges(): void {
    this.setInitialState();
  }

  ngOnInit(): void {
    this.setInitialState();
  }
}

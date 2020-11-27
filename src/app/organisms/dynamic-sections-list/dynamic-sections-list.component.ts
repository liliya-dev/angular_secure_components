import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { defineComponentType } from './helpers';

const standartListData =  {
  listTitle: 'Put list title',
  titles: ['Type text here']
}

const standartTableData = {
  heads: ['text 1'],
  tableData: [{ 'text 1' : '1.1. Text', }, { 'text 1' : '1.1. Text', }]
}

const standartTextData = { title: 'Your new paragraph' }

let defaultSectionData = [{
    type: 'text',
    dataFromParent: {
      title: `For the purpose of this Privacy Policy, we are a Data Controller of your personal information. Our legal basis for collecting and using your personal information, as described in this Privacy Policy, depends on the information we collect and the specific context in which we collect it. We may process your personal information because:`
    }
  },]
 

@Component({
  selector: 'app-dynamic-sections-list',
  templateUrl: './dynamic-sections-list.component.html',
  styleUrls: ['./dynamic-sections-list.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class DynamicSectionsListComponent implements OnInit {
  sections = [];
  activeSection: number;
  isSectionActive = false;
  isElementActive = false;
  constructor() { }

  editSection = (props) => {
    const indexOfSectionToEdit = this.sections.findIndex(section => section.sectionId === props.sectionId)
    this.sections[indexOfSectionToEdit].initialState[props.sectionElementId].dataFromParent = props.data;
  }

  addComponentToSection = ({ sectionId, index, type }) => {
    let initialData;
    switch(type) {
      case 'text': 
        initialData = { title: 'Your new paragraph' };
        break;
      case 'list': 
        initialData = { listTitle: 'Put list title', titles: ['Type text here'] };;
        break;
      case 'table': 
        initialData = { heads: ['text 1'], tableData: [{ 'text 1' : '1.1. Text', }, { 'text 1' : '1.1. Text', }] };
        break;
    }
    const dataOfNewComponent = { type, dataFromParent: initialData }
    const indexOfSectionToEdit = this.sections.findIndex(section => section.sectionId === sectionId)
    const newState = [...this.sections[indexOfSectionToEdit].initialState];
    newState.splice(index + 1, 0, dataOfNewComponent)
    this.sections[indexOfSectionToEdit].initialState  = [...newState]
  }

  deleteComponentFromSection = ({ index, sectionId }) => {
    const indexOfSectionToEdit = this.sections.findIndex(section => section.sectionId === sectionId);
    const newState = [...this.sections[indexOfSectionToEdit].initialState];
    newState.splice(index, 1)
    this.sections[indexOfSectionToEdit].initialState  = [...newState]
  }

  setHoverElement = () => {
    this.isElementActive = true;
    this.isSectionActive = false;
  }

  setNoHoverElement = () => {
    this.isElementActive = false;
    this.isSectionActive = true;
  }

  handleHover = (event: any, index: number) => {
    if (index !== -1) {
      this.isSectionActive = true;
    } else {
      this.isSectionActive = false;
    }
    this.activeSection = index;
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

  ngOnInit(): void {
    if (this.sections.length === 0) {
      this.addSection(0);
    }
    console.log(this.sections)
  }
}

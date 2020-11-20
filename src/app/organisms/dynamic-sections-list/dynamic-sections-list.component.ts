import { Component, OnInit, ViewEncapsulation } from '@angular/core';

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
    console.log(props.componentsList)
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
    this.sections.push(
      {
        initialState: defaultSectionData,
        title: `New section ${index + 1}`,
        sectionId: Date.now(),
      }
    );

  }

  indexTracker(index: number, value: any) {
    return index;
  }

  ngOnInit(): void {
    console.log(this.sections)
    if (this.sections.length === 0) {
      this.addSection(0);
    }
  }
}

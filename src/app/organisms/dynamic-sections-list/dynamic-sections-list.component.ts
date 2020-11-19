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
  constructor() { }

  setActiveSectionNumber = (index: number) => {
    this.activeSection = index;
  }

  addSection(i) {
    this.sections.push(
      {
        initialState: defaultSectionData,
        title: `New section ${i + 1}`,
        id: Date.now(),
      }
    );
  }

  ngOnInit(): void {
    if (this.sections.length === 0) {
      this.addSection(0);
    }
  }
}

import { Component } from '@angular/core';

interface Module {
  title: string,
  text: string
}

@Component({
  selector: 'app-form-screen-fifth',
  templateUrl: './form-screen-fifth.component.html',
  styleUrls: ['./form-screen-fifth.component.scss']
})

export class FormScreenFifthComponent {
  selectedModules: string[] = [];
  modules: Module[] = [
    {
      title: "GDPR, eprivacy",
      text: "Europe",
    },
    {
      title: "Thailand",
      text: "Bangkok",
    },
    {
      title: "Calofornia",
      text: "Europe ",
    },
    {
      title: "CCPA",
      text: "Europe",
    },
    {
      title: "Canada",
      text: "Ottawa",
    },
    {
      title: "Dubai",
      text: "Dubai ",
    },
    {
      title: "GDPR, eprivacy2",
      text: "Europe",
    },
    {
      title: "Thailand2",
      text: "Bangkok",
    },
    {
      title: "Calofornia2",
      text: "Europe ",
    },
  ]

  selectModule(title: string) {
    if (this.selectedModules.includes(title)) {
      this.selectedModules = this.selectedModules.filter(module => module !== title);
    } else {
      this.selectedModules = [...this.selectedModules, title];
    }
  }
}

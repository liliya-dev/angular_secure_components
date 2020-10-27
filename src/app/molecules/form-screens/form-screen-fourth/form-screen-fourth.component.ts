import { Component } from '@angular/core';

interface Module {
  title: string,
  text: string
}

@Component({
  selector: 'app-form-screen-fourth',
  templateUrl: './form-screen-fourth.component.html',
  styleUrls: ['./form-screen-fourth.component.scss']
})
export class FormScreenFourthComponent {

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
  ]

  selectModule(title: string) {
    if (this.selectedModules.includes(title)) {
      this.selectedModules = this.selectedModules.filter(module => module !== title);
    } else {
      this.selectedModules = [...this.selectedModules, title];
    }
  }
}

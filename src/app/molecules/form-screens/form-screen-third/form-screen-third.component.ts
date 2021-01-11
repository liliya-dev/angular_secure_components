import { Component } from '@angular/core';

interface Module {
  title: string,
  text: string,
  src: string
}

@Component({
  selector: 'app-form-screen-third',
  templateUrl: './form-screen-third.component.html',
  styleUrls: ['./form-screen-third.component.scss'],
})

export class FormScreenThirdComponent {
  selectedModules: string[] = [];
  modules: Module[] = [
    {
      title: "GDPR, eprivacy",
      text: "Europe",
      src: "assets/images/flags/euro.png"
    },
    {
      title: "CCPA",
      text: "California",
      src: "assets/images/flags/ccpa.png"
    },
    {
      title: "LGPD",
      text: "Brasil ",
      src: "assets/images/flags/lgpd.png"
    }
  ]

  selectModule(title: string) {
    if (this.selectedModules.includes(title)) {
      this.selectedModules = this.selectedModules.filter(module => module !== title);
    } else {
      this.selectedModules = [...this.selectedModules, title];
    }
  }
}

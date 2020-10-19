import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-form-screen-third',
  templateUrl: './form-screen-third.component.html',
  styleUrls: ['./form-screen-third.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FormScreenThirdComponent implements OnInit {
  selectedModules: string[]=[];
  modules=[
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

    console.log(this.selectedModules)
  }

  ngOnInit(): void {
  }

}

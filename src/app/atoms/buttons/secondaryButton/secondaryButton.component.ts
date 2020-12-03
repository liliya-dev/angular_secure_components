import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-secondary-button',
  templateUrl: './secondaryButton.component.html',
  styleUrls: ['../button.component.scss', 'secondaryButton.component.scss'],
})

export class secondaryButtonComponent {
  @Input() title: string;
  @Input() backgroundColor: string;
  @Input() color: string;
  @Input() srcPath: string;

  fillColor: string =  'rgba(1, 25, 73, 0.5)';

  changeToLightColor() {  
    this.fillColor = 'rgba(1, 25, 73, 0.5)';
  }

  changeToActiveColor(event) {
    const targ: HTMLElement = event.target
    console.log(targ)
    this.fillColor = 'white';
  }
}

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-light-assimetric-button',
  templateUrl: './light-assimetric-button.component.html',
  styleUrls: ['./light-assimetric-button.component.scss']
})

export class LightAssimetricButtonComponent {
  @Input() srcPath: string;
}

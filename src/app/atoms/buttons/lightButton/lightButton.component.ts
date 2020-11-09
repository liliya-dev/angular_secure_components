import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-light-button',
  templateUrl: './lightButton.component.html',
  styleUrls: ['../button.component.scss', 'lightButton.component.scss'],
})

export class lightButtonComponent {
  @Input() backgroundColor: string;
  @Input() srcPath: string;
}

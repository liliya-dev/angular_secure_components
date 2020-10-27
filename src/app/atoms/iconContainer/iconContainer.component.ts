import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-icon-container',
  templateUrl: './iconContainer.component.html',
  styleUrls: ['iconContainer.component.scss'],
})

export class IconContainerComponent {
  @Input() backgroundColor: string;
}

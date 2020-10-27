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
}

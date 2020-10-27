import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-primary-button',
  templateUrl: './primaryButton.component.html',
  styleUrls: ['../button.component.scss', 'primaryButton.component.scss'],
})

export class primaryButtonComponent {
  @Input() title: string;
  @Input() backgroundColor: string;
}

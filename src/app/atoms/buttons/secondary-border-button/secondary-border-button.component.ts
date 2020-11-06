import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-secondary-border-button',
  templateUrl: './secondary-border-button.component.html',
  styleUrls: ['./secondary-border-button.component.scss']
})

export class SecondaryBorderButtonComponent {
  @Input() iconSrc: string;
}

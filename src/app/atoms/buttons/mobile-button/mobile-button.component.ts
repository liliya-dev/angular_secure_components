import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-mobile-button',
  templateUrl: './mobile-button.component.html',
  styleUrls: ['./mobile-button.component.scss',]
})

export class MobileButtonComponent {
  @Input() isOpen: boolean;
  @Input() svgPathNonActive: string;
  @Input() svgPathActive: string;
}

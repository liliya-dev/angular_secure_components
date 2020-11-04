import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-round-icon',
  templateUrl: './round-icon.component.html',
  styleUrls: ['./round-icon.component.scss']
})

export class RoundIconComponent {
  @Input() classes: string;
  @Input() boldText?: string;
  @Input() regularText?: string;
  @Input() linkText?: string;
  @Input() link?: string;
}

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-gradient-text',
  templateUrl: './gradient-text.component.html',
  styleUrls: ['./gradient-text.component.scss']
})

export class GradientTextComponent {
  @Input() classes: string;
  @Input() title: string;
}

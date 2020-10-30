import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-text-with-gradient-back',
  templateUrl: './text-with-gradient-back.component.html',
  styleUrls: ['./text-with-gradient-back.component.scss']
})

export class TextWithGradientBackComponent {
  @Input() titles: string[];
}

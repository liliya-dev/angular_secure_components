import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-text-with-after-gradient-line',
  templateUrl: './text-with-after-gradient-line.component.html',
  styleUrls: ['./text-with-after-gradient-line.component.scss']
})

export class TextWithAfterGradientLineComponent {
  @Input() title: string;
}

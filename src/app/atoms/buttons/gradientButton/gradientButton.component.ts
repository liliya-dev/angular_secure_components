import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-gradient-button',
  templateUrl: './gradientButton.component.html',
  styleUrls: ['gradientButton.component.scss'],
})

export class gradientButtonComponent  {
  @Input() title: string;
  @Input() backgroundColor: string;
  @Input() color: string;
}

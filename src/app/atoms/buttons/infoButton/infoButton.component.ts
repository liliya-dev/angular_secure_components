import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-info-button',
  templateUrl: './infoButton.component.html',
  styleUrls: ['infoButton.component.scss'],
})

export class infoButtonComponent {
  @Input() title: string;
  @Input() backgroundColor: string;
  @Input() color: string;
}

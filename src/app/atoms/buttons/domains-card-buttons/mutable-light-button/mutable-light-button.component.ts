import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-mutable-light-button',
  templateUrl: './mutable-light-button.component.html',
  styleUrls: ['./mutable-light-button.component.scss', '../../button.component.scss']
})

export class MutableLightButtonComponent {
  @Input() title: string;
}

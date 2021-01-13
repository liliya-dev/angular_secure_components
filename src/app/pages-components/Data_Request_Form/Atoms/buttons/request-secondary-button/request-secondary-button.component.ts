import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-request-secondary-button',
  templateUrl: './request-secondary-button.component.html',
  styleUrls: ['./request-secondary-button.component.scss']
})

export class RequestSecondaryButtonComponent {
  @Input() title: string;
}

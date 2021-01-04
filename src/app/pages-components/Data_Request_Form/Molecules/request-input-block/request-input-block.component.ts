import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-request-input-block',
  templateUrl: './request-input-block.component.html',
  styleUrls: ['./request-input-block.component.scss']
})

export class RequestInputBlockComponent {
  @Input() title: string;
  @Input() isRequired: string;
}

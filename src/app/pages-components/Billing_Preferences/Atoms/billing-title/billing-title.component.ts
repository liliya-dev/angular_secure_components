import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-billing-title',
  templateUrl: './billing-title.component.html',
  styleUrls: ['./billing-title.component.scss']
})

export class BillingTitleComponent {
  @Input() title: string;
}

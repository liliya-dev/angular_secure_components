import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-billing-primary-asymmetrical-button',
  templateUrl: './billing-primary-asymmetrical-button.component.html',
  styleUrls: ['./billing-primary-asymmetrical-button.component.scss']
})
export class BillingPrimaryAsymmetricalButtonComponent implements OnInit {
  @Input() title: string;

  ngOnInit(): void {}
}

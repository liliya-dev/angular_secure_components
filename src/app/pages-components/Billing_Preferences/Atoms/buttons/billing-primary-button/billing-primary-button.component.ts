import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-billing-primary-button',
  templateUrl: './billing-primary-button.component.html',
  styleUrls: ['./billing-primary-button.component.scss']
})
export class BillingPrimaryButtonComponent implements OnInit {
  @Input() title: string;

  ngOnInit(): void {}
}

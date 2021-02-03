import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-billing-card',
  templateUrl: './billing-card.component.html',
  styleUrls: ['./billing-card.component.scss']
})
export class BillingCardComponent implements OnInit {
  @Input() lastNumbers: string;
  @Input() date: string;
  @Input() name: string;
  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-billing-danger-button',
  templateUrl: './billing-danger-button.component.html',
  styleUrls: ['./billing-danger-button.component.scss']
})

export class BillingDangerButtonComponent implements OnInit {
  @Input() title: string; 
  @Input() isShort: boolean;

  ngOnInit(): void {}
}

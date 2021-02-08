import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-billing-secondary-button',
  templateUrl: './billing-secondary-button.component.html',
  styleUrls: ['./billing-secondary-button.component.scss'],
})

export class BillingSecondaryButtonComponent implements OnInit {
  @Input() title: string;

  ngAfterViewInit() {}
  
  ngOnInit(): void {
  }
}

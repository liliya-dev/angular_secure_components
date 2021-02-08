import { Component, Input, OnInit } from '@angular/core';

interface Item {
  status: boolean,
  details: string,
  cycle: string,
  domains: number,
  unitPrice: number,
}

const ACTIVE_COLOR = 'linear-gradient(89.52deg, #24B04B -46.17%, #0263BC 186.99%)';
const INACTIVE_COLOR = '#EA2D2D';

@Component({
  selector: 'app-billing-payment-table',
  templateUrl: './billing-payment-table.component.html',
  styleUrls: ['./billing-payment-table.component.scss']
})

export class BillingPaymentTableComponent implements OnInit {
  @Input() initialData: Item[];

  data: Item[];
  direction: 'forward' | 'back' = 'forward';

  detectColor(status) {
    return status ? ACTIVE_COLOR : INACTIVE_COLOR;
  }

  sortTable() {
    if(this.direction === 'forward') {
      this.direction = 'back';
      this.data = this.data.sort((a, b) => a.domains - b.domains);
    } else {
      this.direction = 'forward';
      this.data = this.data.sort((a, b) => b.domains - a.domains);
    }
  }

  ngOnInit(): void {
    this.data = JSON.parse(JSON.stringify(this.initialData));
  }
}

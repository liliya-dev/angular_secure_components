import { AfterViewInit, Component, ElementRef, HostListener, Input, OnInit, ViewChild } from '@angular/core';

interface Item {
  date: string,
  amount: number,
  paid: boolean,
  invoice: string,
}

const MOBILE_VIEW = 680;

@Component({
  selector: 'app-billing-invoices',
  templateUrl: './billing-invoices.component.html',
  styleUrls: ['./billing-invoices.component.scss']
})

export class BillingInvoicesComponent implements OnInit, AfterViewInit {
  @Input() title: string;
  @Input() initialData: Item[];

  data: Item[];
  direction: 'forward' | 'back' = 'forward';
  isMobile: boolean;
  element = null;

  @ViewChild('container') container: ElementRef;

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.isMobile = this.container.nativeElement.clientWidth < MOBILE_VIEW;
  }

  sortTable() {
    if(this.direction === 'forward') {
      this.direction = 'back';
      this.data = this.data.sort((a, b) => {
        const aDateSplited = a.date.split('.');
        const aDate = Date.parse([aDateSplited[1], aDateSplited[0], aDateSplited[2]].join(' '));
        const bDateSplited = b.date.split('.');
        const bDate = Date.parse([bDateSplited[1], bDateSplited[0], bDateSplited[2]].join(' '));
        return aDate - bDate;
      });
    } else {
      this.direction = 'forward';
      this.data = this.data.sort((a, b) => {
        const aDateSplited = a.date.split('.');
        const aDate = Date.parse([aDateSplited[1], aDateSplited[0], aDateSplited[2]].join(' '));
        const bDateSplited = b.date.split('.');
        const bDate = Date.parse([bDateSplited[1], bDateSplited[0], bDateSplited[2]].join(' '));
        return bDate - aDate;
      });
    }
  }

  download(invoice: string) {
    console.log(invoice, 'downloaded');
    /// put your logic here
  }

  ngAfterViewInit(): void {
    this.isMobile = this.container.nativeElement.clientWidth < MOBILE_VIEW;  
  }

  ngOnInit(): void {
    this.data = JSON.parse(JSON.stringify(this.initialData));
  }
}

import { AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';

const MOBILE_VIEW = 680;

@Component({
  selector: 'app-billing-warning',
  templateUrl: './billing-warning.component.html',
  styleUrls: ['./billing-warning.component.scss']
})
export class BillingWarningComponent implements OnInit, AfterViewInit {
  isMobile: boolean;
  @ViewChild('container') container: ElementRef;

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.isMobile = this.container.nativeElement.clientWidth < MOBILE_VIEW;
  }

  ngAfterViewInit(): void {
    this.isMobile = this.container.nativeElement.clientWidth < MOBILE_VIEW;  
  }

  ngOnInit(): void {}
}

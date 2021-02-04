import { AfterViewInit, Component, ElementRef, HostListener, Input, OnInit, ViewChild } from '@angular/core';

const MOBILE_VIEW = 680;

@Component({
  selector: 'app-billing-plan',
  templateUrl: './billing-plan.component.html',
  styleUrls: ['./billing-plan.component.scss']
})

export class BillingPlanComponent implements OnInit, AfterViewInit {
  @Input() features: string[];
  @Input() title: string;
  @Input() featuresTitle: string;
  @Input() period: string;
  @Input() price: string;
  @Input() currency: string;
  @Input() description: string;
  @Input() isFreemium: boolean;
  @Input() date: string; 
  @Input() domainsNumber: number;

  MODAL_ERROR = 'error';
  MODAL_APPROVE = 'approve';

  isMobile: boolean;
  isModalVisible: boolean;
  modalType: string;
  @ViewChild('container') container: ElementRef;

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.isMobile = this.container.nativeElement.clientWidth < MOBILE_VIEW;
  }

  showModal() {
    this.modalType = this.domainsNumber > 1 ? this.MODAL_ERROR : this.MODAL_APPROVE;
    this.isModalVisible = true;
  }

  hideModal() {
    this.isModalVisible = false;
  }

  downgradePlan() {
    this.isModalVisible = false;
    console.log('Downgraded');
    /// put your logic
  }

  ngAfterViewInit(): void {
    this.isMobile = this.container.nativeElement.clientWidth < MOBILE_VIEW;  
  }

  ngOnInit(): void {
  }

}

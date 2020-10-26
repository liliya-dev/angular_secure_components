import { Component, ElementRef, OnInit, HostListener, ViewEncapsulation, ViewChild } from '@angular/core';

@Component({
  selector: 'app-scan-report',
  templateUrl: './scan-report.component.html',
  styleUrls: ['./scan-report.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ScanReportComponent implements OnInit {
  items=['reports', 'domains', 'users', 'account', 'request portal'];
  itemsToSearch=['My current company', 'My clients company', 'secure privacy', 'secure privacy2', 'secure privacy3'];
  leftSideMenuItems=[
    { title: 'scan'},
    { title: 'style'},
    { title: 'cookie banner'},
    { title: 'IAB 2.0 settings'},
    { title: 'Preference Center', sections: ['GDPR/ePrivacy', 'CCPA', 'LGPD']},
    { title: 'data request form'},
    { title: 'Preference Center', sections: ['Privacy Policy', 'Cookie Declaration', 'Embed On Website']},
    { title: 'cookie classification'},
    { title: 'languages'},
    { title: 'coverage'},
    { title: 'installation'},
  ]
  mobileMenuItems=[
    { title: 'Reports', svgPath: 'assets/images/menu/Reports.svg',   isActive: false,},
    { title: 'Domains', svgPath: 'assets/images/menu/Domains.svg',   isActive: false,},
    { title: 'Account', svgPath: 'assets/images/menu/Account.svg',   isActive: false,},
    { title: 'Options', svgPath: 'assets/images/menu/Options.svg',   isActive: false,},
  ]
  isMobile=false;
  isSideMenuVisible=false;
  marginMenu=156;

  toggleSideMenu() {
    this.isSideMenuVisible = !this.isSideMenuVisible;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    if (event.target.innerWidth < 800) {
      this.isMobile = true;
    }
    if (event.target.innerWidth > 800) {
      this.isMobile = false;
    }
  }

  @ViewChild('nav') element: ElementRef;

  @HostListener('document:click', ['$event'])
	onClick(event: Event) {
    if (!this.element.nativeElement.contains(event.target)){
      this.isSideMenuVisible=false;
    }
  }
  
  ngOnInit(): void {
    if (window.innerWidth < 800) {
      this.isMobile = true;
    }
  }
}

import { Component, ElementRef, OnInit, HostListener, ViewChild } from '@angular/core';

interface SideItems {
  title: string;
  sections?: string[],
}

interface MobileItems {
  title: string;
  svgPath: string,
  isActive: boolean
}

@Component({
  selector: 'app-scan-report',
  templateUrl: './scan-report.component.html',
  styleUrls: ['./scan-report.component.scss']
})

export class ScanReportComponent implements OnInit {
  items: string[] = ['reports', 'domains', 'users', 'account', 'request portal'];
  itemsToSearch: string[] = ['My current company', 'My clients company', 'secure privacy', 'secure privacy2', 'secure privacy3'];
  leftSideMenuItems: SideItems[] = [
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
  mobileMenuItems: MobileItems[] = [
    { title: 'Reports', svgPath: 'assets/images/menu/Reports.svg',   isActive: false,},
    { title: 'Domains', svgPath: 'assets/images/menu/Domains.svg',   isActive: false,},
    { title: 'Account', svgPath: 'assets/images/menu/Account.svg',   isActive: false,},
    { title: 'Options', svgPath: 'assets/images/menu/Options.svg',   isActive: false,},
  ]
  isMobile: boolean = false;
  isSideMenuVisible: boolean = false;

  toggleSideMenu() {
    this.isSideMenuVisible = !this.isSideMenuVisible;
  }
  
  @ViewChild('nav') element: ElementRef;

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.isMobile = (event.target.innerWidth < 800) ? true : false;
  }

  @HostListener('document:click', ['$event'])
	onClick(event: Event) {
    if (!this.element.nativeElement.contains(event.target)) {
      this.isSideMenuVisible = false;
    }
  }
  
  ngOnInit(): void {
    this.isMobile = (window.innerWidth < 800) ? true : false;
  }
}

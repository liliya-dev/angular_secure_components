import { Component, OnInit, ViewEncapsulation } from '@angular/core';

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
  constructor() { }

  ngOnInit(): void {
  }

}

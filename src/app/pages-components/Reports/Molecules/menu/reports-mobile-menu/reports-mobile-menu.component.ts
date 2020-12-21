import { Component, Input } from '@angular/core';

@Component({
  selector: 'reports-mobile-menu',
  templateUrl: './reports-mobile-menu.component.html',
  styleUrls: ['./reports-mobile-menu.component.scss']
})

export class ReportsMobileMenuComponent {
  @Input() items: string[];

  active: number = 0;

  handlClick(event: any, i: number) {
    event.preventDefault();
    this.active = i;
  }
}

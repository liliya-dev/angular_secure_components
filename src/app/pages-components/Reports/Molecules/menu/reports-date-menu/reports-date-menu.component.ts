import { Component, Input } from '@angular/core';

@Component({
  selector: 'reports-date-menu',
  templateUrl: './reports-date-menu.component.html',
  styleUrls: ['./reports-date-menu.component.scss']
})

export class ReportsDateMenuComponent {
  @Input() items: string[];

  active: number = 0;

  handlClick(event: any, i: number) {
    event.preventDefault();
    this.active = i;
  }
}

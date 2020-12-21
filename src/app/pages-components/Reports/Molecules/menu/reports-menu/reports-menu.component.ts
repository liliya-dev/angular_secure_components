import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'reports-menu',
  templateUrl: './reports-menu.component.html',
  styleUrls: ['./reports-menu.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class ReportsMenuComponent {
  @Input() items: string[];

  active: number = 0;

  handlClick(event: any, i: number) {
    event.preventDefault();
    this.active = i;
  }
}

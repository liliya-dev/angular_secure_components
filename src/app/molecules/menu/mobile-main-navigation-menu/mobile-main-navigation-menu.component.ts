import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-mobile-main-navigation-menu',
  templateUrl: './mobile-main-navigation-menu.component.html',
  styleUrls: ['./mobile-main-navigation-menu.component.scss']
})

export class MobileMainNavigationMenuComponent {
  @Input() items: string[];

  active: number = 0;

  handlClick(event: any, i: number) {
    event.preventDefault();
    this.active = i;
  }
}

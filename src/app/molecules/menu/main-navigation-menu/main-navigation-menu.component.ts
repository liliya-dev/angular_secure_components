import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-main-navigation-menu',
  templateUrl: './main-navigation-menu.component.html',
  styleUrls: ['./main-navigation-menu.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MainNavigationMenuComponent  {
  @Input() items: string[];

  active = 0;

  handlClick(event: any, i: number) {
    event.preventDefault();
    this.active = i;
  }

}

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})

export class SideMenuComponent {
  @Input() items: string[];

  active: number = 0;
  
  handlClick(event: any, i: number) {
    event.preventDefault();
    this.active = i;
  }
}

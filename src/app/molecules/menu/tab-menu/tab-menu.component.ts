import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tab-menu',
  templateUrl: './tab-menu.component.html',
  styleUrls: ['./tab-menu.component.scss']
})

export class TabMenuComponent {
  @Input() titles: string[];
  active = 0;

  setActive(i: number) {
    this.active = i;
  }
}

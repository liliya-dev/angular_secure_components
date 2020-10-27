import { Component, Input, ViewEncapsulation } from '@angular/core';

interface Item {
  title: string;
  sections: string[]
}

@Component({
  selector: 'app-composite-menu',
  templateUrl: './composite-menu.component.html',
  styleUrls: ['./composite-menu.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class CompositeMenuComponent {
  @Input() items: Item[];

  active: string = '';

  handlClick(event: any, i: string) {
    event.preventDefault();
    this.active = i;
  }
}

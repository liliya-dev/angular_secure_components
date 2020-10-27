import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-search-item',
  templateUrl: './searchItem.component.html',
  styleUrls: ['searchItem.component.scss'],
})

export class searchItemComponent {
  @Input() title: string;
  @Input() classes: string;
}

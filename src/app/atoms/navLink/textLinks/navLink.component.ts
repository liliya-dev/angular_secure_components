import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-nav-link',
  templateUrl: './navLink.component.html',
  styleUrls: ['navLink.component.scss'],
})

export class navLinkComponent implements OnChanges {
  @Input() title: string;
  @Input() classes: string;
  @Input() isActive: boolean;

  appointedClasses: string = '';

  ngOnChanges() {
    this.appointedClasses = this.isActive ? `${this.classes} active` : this.classes;
  }
}

import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'reports-text-link',
  templateUrl: './reports-text-link.component.html',
  styleUrls: ['reports-text-link.component.scss'],
})

export class ReportsTextLinkComponent implements OnChanges {
  @Input() title: string;
  @Input() classes: string;
  @Input() isActive: boolean;

  appointedClasses: string = '';

  ngOnChanges() {
    this.appointedClasses = this.isActive ? `${this.classes} active` : this.classes;
  }
}

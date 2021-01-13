import { Component, Input, OnChanges } from '@angular/core';

const ACTIVE_COLOR = '#24B04B';
const STATIC_COLOR = 'rgba(1, 25, 73, 0.5)';
const HOVER_COLOR = 'rgba(1, 25, 73, 1)';

@Component({
  selector: 'reports-icon-link',
  templateUrl: './reports-icon-link.component.html',
  styleUrls: ['./reports-icon-link.component.scss']
})

export class ReportsIconLinkComponent implements OnChanges {
  @Input() isActive: boolean;
  @Input() title: string;
  @Input() svgPath: string;
  
  fillColor: string;

  onHover() {
    if (!this.isActive) {
      this.fillColor = HOVER_COLOR;
    }
  }

  onLeave() {
    if (!this.isActive) {
      this.fillColor = STATIC_COLOR;
    }
  }

  ngOnChanges(): void {
    this.fillColor = this.isActive ? ACTIVE_COLOR : STATIC_COLOR;
  }
}

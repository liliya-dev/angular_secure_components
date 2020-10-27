import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-icon-links',
  templateUrl: './icon-links.component.html',
  styleUrls: ['./icon-links.component.scss']
})

export class IconLinksComponent implements OnChanges {
  @Input() isActive: boolean;
  @Input() title: string;
  @Input() svgPath: string;
  
  fillColor: string;

  onHover() {
    if (!this.isActive) {
      this.fillColor = 'rgba(1, 25, 73, 1)';
    }
  }

  onLeave() {
    if (!this.isActive) {
      this.fillColor = 'rgba(1, 25, 73, 0.5)';
    }
  }

  ngOnChanges(): void {
    this.fillColor = this.isActive ? '#24B04B' : 'rgba(1, 25, 73, 0.5)'
  }
}

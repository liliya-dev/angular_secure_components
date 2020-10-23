import { OnChanges, Component, Input } from '@angular/core';

@Component({
  selector: 'app-icon-button',
  templateUrl: './icon-button.component.html',
  styleUrls: ['./icon-button.component.scss']
})
export class IconButtonComponent implements OnChanges {
  @Input() isActive: boolean;
  @Input() title: string;
  @Input() svgPath: string;
  
  fillColor;


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
  constructor() { }

  ngOnChanges(): void {
    this.fillColor = this.isActive ? '#24B04B' : 'rgba(1, 25, 73, 0.5)'
  }
}

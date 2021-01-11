import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-scan-screens',
  templateUrl: './scan-screens.component.html',
  styleUrls: ['./scan-screens.component.scss'],
})

export class ScanScreensComponent {
  @Input() items: string[];
}

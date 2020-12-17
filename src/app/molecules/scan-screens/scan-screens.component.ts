import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-scan-screens',
  templateUrl: './scan-screens.component.html',
  styleUrls: ['./scan-screens.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class ScanScreensComponent {
  @Input() items: string[];
}

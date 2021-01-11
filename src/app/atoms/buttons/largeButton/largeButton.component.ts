import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-large-button',
  templateUrl: './largeButton.component.html',
  styleUrls: ['largeButton.component.scss'],
})

export class largeButtonComponent implements OnChanges {
  @Input() title: string;
  @Input() text: string;
  @Input() isActive: string;
  @Input() backgroundColor: string;
  @Input() color: string;

  ngOnChanges() {}
}

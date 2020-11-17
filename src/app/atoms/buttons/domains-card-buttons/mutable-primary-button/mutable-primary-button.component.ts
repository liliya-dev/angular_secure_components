import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-mutable-primary-button',
  templateUrl: './mutable-primary-button.component.html',
  styleUrls: ['./mutable-primary-button.component.scss']
})

export class MutablePrimaryButtonComponent implements OnChanges {
  @Input() title: string;
  @Input() onActive: boolean;

  classes = '';

  ngOnChanges() {
    this.classes = this.onActive ? 'app-mutable-primary-button active' : 'app-mutable-primary-button';
  }
}

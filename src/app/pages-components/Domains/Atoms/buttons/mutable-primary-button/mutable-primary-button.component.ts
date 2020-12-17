import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-mutable-primary-button',
  templateUrl: './mutable-primary-button.component.html',
  styleUrls: ['./mutable-primary-button.component.scss']
})

export class DomainsMutablePrimaryButtonComponent implements OnChanges {
  @Input() title: string;

  ngOnChanges() {}
}

import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-teams-mutable-primary-button',
  templateUrl: './teams-mutable-primary-button.component.html',
  styleUrls: ['./teams-mutable-primary-button.component.scss']
})

export class TeamsMutablePrimaryButtonComponent implements OnChanges {
  @Input() title: string;

  ngOnChanges() {}
}

import { Component, Input, OnChanges } from '@angular/core';

const HOVER_COLOR = 'red';
const STATIC_COLOR = 'white';

@Component({
  selector: 'teams-app-mutable-danger-button',
  templateUrl: './teams-mutable-danger-button.component.html',
  styleUrls: ['./teams-mutable-danger-button.component.scss']
})

export class TeamsMutableDangerButtonComponent implements OnChanges {
  @Input() svgPath: string;

  color = STATIC_COLOR;

  changeToActiveColor = () => {
    this.color = HOVER_COLOR;
  }

  changeToStaticColor = () => {
    this.color = STATIC_COLOR;
  }

  ngOnChanges(): void {}
}

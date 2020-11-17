import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-small-light-add-button',
  templateUrl: './small-light-add-button.component.html',
  styleUrls: ['./small-light-add-button.component.scss']
})
export class SmallLightAddButtonComponent {
  @Input() classes: string;
  @Input() title: string;
}

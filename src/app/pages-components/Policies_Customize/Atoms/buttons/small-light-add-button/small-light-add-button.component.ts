import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-small-light-add-button',
  templateUrl: './small-light-add-button.component.html',
  styleUrls: ['./small-light-add-button.component.scss']
})
export class PoliciesSmallLightAddButtonComponent {
  @Input() classes: string;
  @Input() title: string;
}

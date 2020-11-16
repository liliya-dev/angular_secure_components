import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-form-screen-first',
  templateUrl: './form-screen-first.component.html',
  styleUrls: ['./form-screen-first.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class FormScreenFirstComponent {
  handleInputChange = (value) => console.log('changeValueParentFunction works', value)
}

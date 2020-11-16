import { Component } from '@angular/core';

@Component({
  selector: 'app-form-screen-second',
  templateUrl: './form-screen-second.component.html',
  styleUrls: ['./form-screen-second.component.scss']
})

export class FormScreenSecondComponent {
  handleInputChange = (value) => console.log('changeValueParentFunction works', value)
}

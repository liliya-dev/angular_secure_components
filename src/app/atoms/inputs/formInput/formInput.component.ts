import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-form-input',
  templateUrl: './formInput.component.html',
  styleUrls: ['formInput.component.scss'],
})

export class formInputComponent {
  @Input() placeholderText: string;
  @Input() name: string;
}

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-form-input',
  templateUrl: './formInput.component.html',
  styleUrls: ['formInput.component.scss'],
})

export class formInputComponent {
  @Input() backgroundColor: string;
  @Input() placeholderText: string;
  @Input() color: string;
  @Input() classes: string;
  @Input() wrapperClasses: string;
}

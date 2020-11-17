import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-checkbox-circle-input',
  templateUrl: './checkbox-circle-input.component.html',
  styleUrls: ['./checkbox-circle-input.component.scss']
})

export class CheckboxCircleInputComponent {
  @Input() isChecked: boolean;
  @Input() title: string;
  @Input() id?: number = Date.now();
}

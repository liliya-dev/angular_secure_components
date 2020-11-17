import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-checkbox-input-dark',
  templateUrl: './checkbox-input-dark.component.html',
  styleUrls: ['./checkbox-input-dark.component.scss']
})

export class CheckboxInputDarkComponent {
  @Input() isChecked: boolean;
  @Input() title?: string;
  @Input() id?: number = Math.random();
}

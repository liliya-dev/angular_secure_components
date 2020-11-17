import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-checkbox-input-switch',
  templateUrl: './checkbox-input-switch.component.html',
  styleUrls: ['./checkbox-input-switch.component.scss']
})

export class CheckboxInputSwitchComponent {
  @Input() isChecked: boolean;
  @Input() id?: number = Math.random();
}

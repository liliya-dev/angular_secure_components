import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-checkbox-input-simple',
  templateUrl: './checkbox-input-simple.component.html',
  styleUrls: ['./checkbox-input-simple.component.scss']
})

export class CheckboxInputSimpleComponent {
  @Input() isChecked: boolean;
  @Input() title: string;
  @Input() id?: number = Math.random();
}

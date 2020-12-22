import { Component, Input } from '@angular/core';

@Component({
  selector: 'reports-checkbox-input',
  templateUrl: './reports-checkbox-input.component.html',
  styleUrls: ['./reports-checkbox-input.component.scss']
})

export class ReportsCheckboxInput {
  @Input() isChecked: boolean;
  @Input() title?: string;
  @Input() id: number | string;
}

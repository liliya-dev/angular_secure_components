import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-plan-builder-checkbox',
  templateUrl: './plan-builder-checkbox.component.html',
  styleUrls: ['./plan-builder-checkbox.component.scss']
})

export class PlanBuilderCheckboxComponent implements OnInit, OnChanges {
  @Input() initialValue: boolean;
  @Input() id: number | string;
  @Output() onToggle?: EventEmitter<any> = new EventEmitter();

  isChecked;

  onChange(event) {
    this.isChecked = event.target.checked;
    this.onToggle.emit({
      id: this.id,
      selected: this.isChecked,
    })
  }

  ngOnInit(): void {
    this.isChecked = this.initialValue;
  }

  ngOnChanges(): void {
    this.isChecked = this.initialValue;
  }
}

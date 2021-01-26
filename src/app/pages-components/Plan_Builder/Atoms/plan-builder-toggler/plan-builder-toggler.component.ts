import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-plan-builder-toggler',
  templateUrl: './plan-builder-toggler.component.html',
  styleUrls: ['./plan-builder-toggler.component.scss']
})

export class PlanBuilderTogglerComponent implements OnInit, OnChanges {
  @Input() initialValue: boolean;
  @Input() id?: number = Math.random();
  @Input() leftValue: string;
  @Input() rightValue: string;
  @Input() text: string;

  @Output() onToggle?: EventEmitter<any> = new EventEmitter();

  isChecked;

  change(event) {
    this.isChecked = event.target.checked;
    const togglerState = this.isChecked ? this.rightValue : this.leftValue;
    this.onToggle.emit(togglerState);
  }
  
  ngOnInit(): void {
    this.isChecked = this.initialValue;
  }

  ngOnChanges(): void {
    this.isChecked = this.initialValue;
  }
}

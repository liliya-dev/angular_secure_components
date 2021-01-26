import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-plan-builder-domains-select',
  templateUrl: './plan-builder-domains-select.component.html',
  styleUrls: ['./plan-builder-domains-select.component.scss']
})
export class PlanBuilderDomainsSelectComponent implements OnInit {
  @Input() values: { value: number, price: number }[];
  @Input() currency: string;
  @Input() initialValue: number;
  @Input() period: string;
  @Input() discount: number;

  rangeValues;
  activeValue;

  onChange(index) {
    this.activeValue = this.values[index];
  }

  detectActiveIndex(value: number) {
    const activeIndex = this.values.findIndex(item => item.value === value);
    this.activeValue = this.values[activeIndex];
  }

  ngOnInit(): void {
    this.rangeValues = this.values.map(item => item.value);
    this.detectActiveIndex(this.initialValue);
  }
}

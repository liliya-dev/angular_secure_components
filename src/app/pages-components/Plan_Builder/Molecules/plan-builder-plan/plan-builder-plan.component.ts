import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-plan-builder-plan',
  templateUrl: './plan-builder-plan.component.html',
  styleUrls: ['./plan-builder-plan.component.scss']
})

export class PlanBuilderPlanComponent implements OnInit {
  @Input() domainsNumber: number;
  @Input() domainsPrice: number;
  @Input() currency: string;
  @Input() modules: { title: string, price: number }[];
  @Input() initialPeriod: string;
  @Input() title: string;
  @Input() salePercent: number;

  totalCost: number;
  totalCostWithDicount: number;

  getCost() {
    const cost = this.modules.reduce(
      (accumulator, currentValue) => accumulator + currentValue.price,
      this.domainsPrice
    );
    this.totalCost = cost;
    this.totalCostWithDicount = cost * (1 - this.salePercent / 100);
  }

  changePeriod(props) {
    this.initialPeriod = props;
    /// or your parent logic angd price logic
  }


  ngOnInit(): void {
    this.getCost()
  }

}

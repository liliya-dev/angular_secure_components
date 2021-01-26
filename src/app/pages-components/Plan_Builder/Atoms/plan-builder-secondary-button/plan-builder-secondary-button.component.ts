import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-plan-builder-secondary-button',
  templateUrl: './plan-builder-secondary-button.component.html',
  styleUrls: ['./plan-builder-secondary-button.component.scss']
})
export class PlanBuilderSecondaryButtonComponent implements OnInit {
  @Input() title :string;

  ngOnInit(): void {}
}

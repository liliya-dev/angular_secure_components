import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-plan-builder-primary-button',
  templateUrl: './plan-builder-primary-button.component.html',
  styleUrls: ['./plan-builder-primary-button.component.scss']
})

export class PlanBuilderPrimaryButtonComponent implements OnInit {
  @Input() title :string;

  ngOnInit(): void {}
}

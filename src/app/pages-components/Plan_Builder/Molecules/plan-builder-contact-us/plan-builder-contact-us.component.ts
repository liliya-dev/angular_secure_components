import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-plan-builder-contact-us',
  templateUrl: './plan-builder-contact-us.component.html',
  styleUrls: ['./plan-builder-contact-us.component.scss']
})

export class PlanBuilderContactUsComponent implements OnInit {
  @Input() title: string;
  @Input() text: string;

  ngOnInit(): void {}
}

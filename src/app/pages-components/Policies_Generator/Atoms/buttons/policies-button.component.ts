import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-policies-button',
  templateUrl: './policies-button.component.html',
  styleUrls: ['./policies-button.component.scss']
})

export class PoliciesButtonComponent implements OnInit {
  @Input() title: string;
  @Input() classes: string;

  constructor() { }

  ngOnInit(): void {
  }
}

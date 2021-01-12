import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-simple-policy-generator-button',
  templateUrl: './simple-policy-generator-button.component.html',
  styleUrls: ['./simple-policy-generator-button.component.scss']
})

export class SimplePolicyGeneratorButtonComponent implements OnInit {
  @Input() title: string;

  ngOnInit(): void {}
}
